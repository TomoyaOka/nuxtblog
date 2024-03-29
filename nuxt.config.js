import axios from "axios";
require("dotenv").config();
const { API_KEY } = process.env;
// const domain = process.env.BASE_URL.match(
//   /^https?:\/{2,}(.*?)(?:\/|\?|#|$)/
// )[1];
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Next",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1.0"
      },
      {
        hid: "description",
        name: "description",
        content:
          "HTML.CSS.Nuxt.Vueなど技術面についての記事や筆者の考え方について投稿していくブログです。"
      },
      { hid: "og:site_name", property: "og:site_name", content: "Next!!" },
      { hid: "og:type", property: "og:type", content: "article" },
      { hid: "og:url", property: "og:url", content: "https://next-blog.site/" },
      { hid: "og:title", property: "og:title", content: "Next!!" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "HTML.CSS.Nuxt.Vueなど技術面についての記事や筆者の考え方について投稿していくブログです。"
      },
      { hid: "og:image", property: "og:image", content: "" },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:site",
        property: "twitter:site",
        content: "@create_toom"
      },
      { hid: "twitter:image", property: "twitter:image", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "/main.js" },
      {
        src:
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3468164663534942"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/reset.css",
    "@/assets/scss/mixin.css",
    "@/assets/scss/common.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/vue-scrollto",
    "~plugins/vee-validate"
    // '~/plugins/preview.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "@nuxtjs/sitemap",
    "@nuxtjs/markdownit",
    "@nuxtjs/google-gtag",
    "nuxt-webfontloader",
    // ['vue-scrollto/nuxt', { duration: 300 }],
    [
      "@nuxtjs/google-analytics",
      {
        id: "G-5V3VF5LL3P"
      }
    ]
    // "@nuxtjs/google-adsense",
    // {
    //   id: "ca-pub-1476685182046923",
    //   pageLevelAds: true
    //   // analyticsUacct: "UA-XXX-X",
    //   // analyticsDomainName: "example.com"
    // }
  ],

  "google-gtag": {
    id: "G-5V3VF5LL3P",
    debug: true
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://next-blog.site/",
    generate: true,
    exclude: [],
    routes(callback) {
      axios
        .get("https://nuxtblog.microcms.io/api/v1/media", {
          headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
        })
        .then(res => {
          var routes = res.data.contents.map(item => {
            return "/media/" + item.id;
          });
          callback(null, routes);
        })
        .catch(callback);
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"]
  },

  env: {
    API_KEY
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: "/page/:p",
        component: resolve(__dirname, "pages/index.vue"),
        name: "page"
      });
      routes.push({
        path: "/category/:categoryId/page/:p",
        component: resolve(__dirname, "pages/category/index.vue"),
        name: "category"
      });
    }
  },
  // ローディングバー設定
  loading: {
    color: "mediumseagreen",
    height: "1px"
  },
  generate: {
    async routes() {
      const limit = 12;
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i);

      const pages = await axios
        .get(`https://nuxtblog.microcms.io/api/v1/media`, {
          headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
        })
        .then(res =>
          range(1, Math.ceil(res.data.totalCount / limit)).map(p => ({
            route: `/page/${p}`
          }))
        );

      const categories = await axios
        .get(`https://nuxtblog.microcms.io/api/v1/category?fields=id`, {
          headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
        })
        .then(({ data }) => {
          return data.contents.map(content => content.id);
        });

      // カテゴリーページのページング
      const categoryPages = await Promise.all(
        categories.map(category =>
          axios
            .get(
              `https://nuxtblog.microcms.io/api/v1/media?limit=${limit}&filters=category[equals]${category}`,
              { headers: { "X-MICROCMS-API-KEY": process.env.API_KEY } }
            )
            .then(res =>
              range(1, Math.ceil(res.data.totalCount / limit)).map(p => ({
                route: `/category/${category}/page/${p}`
              }))
            )
        )
      );

      // 2次元配列になってるのでフラットにする
      const flattenCategoryPages = [].concat.apply([], categoryPages);
      return [...pages, ...flattenCategoryPages];
    }
  }
};
