import axios from 'axios'
require('dotenv').config();
const { API_KEY } = process.env;

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Next',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'HTML.CSS.Nuxt.Vueなど技術面についての記事や筆者の考え方について投稿していくブログです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Next!!' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: 'https://next-blog.site/' },
      { hid: 'og:title', property: 'og:title', content: 'Next!!' },
      { hid: 'og:description', property: 'og:description', content: 'HTML.CSS.Nuxt.Vueなど技術面についての記事や筆者の考え方について投稿していくブログです。' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@create_toom' },
      { hid: 'twitter:image', property: 'twitter:image', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/main.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/reset.css',
    '@/assets/scss/mixin.css',
    '@/assets/scss/common.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-scrollto',
    '~plugins/vee-validate',
    // '~/plugins/preview.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit',
    '@nuxtjs/google-gtag',
    'nuxt-webfontloader',
    // ['vue-scrollto/nuxt', { duration: 300 }],
    ['@nuxtjs/google-analytics', {
      id: 'G-5V3VF5LL3P'
    }],
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:400,700'] 
    }
  },

  'google-gtag': {
    id: 'G-5V3VF5LL3P',
    debug: true, 
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://next-blog.site/',
    generate: true,
    exclude: [],
    routes (callback) {
      axios.get("https://nuxtblog.microcms.io/api/v1/media", {
          headers: {'X-MICROCMS-API-KEY': process.env.API_KEY }
        })
      .then((res) => {
        var routes = res.data.contents.map((item) => {
          return "/media/" + item.id
        })
        callback(null, routes)
      })
      .catch(callback)
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"]
  },

  env: {
    API_KEY
  },
  performance: { hints: false },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'page',
      })
      // HTMLCSSページルーティング
      routes.push({
        path: '/category/:htmlcss/page/:p',
        component: resolve(__dirname, 'pages/category/htmlcss.vue'),
        name: 'htmlcss',
      })
      // VueNuxtページルーティング
      routes.push({
        path: '/category/:vuenuxt/page/:p',
        component: resolve(__dirname, 'pages/category/vuenuxt.vue'),
        name: 'vuenuxt',
      })
      // shopifyページルーティング
      routes.push({
        path: '/category/:shopify/page/:p',
        component: resolve(__dirname, 'pages/category/shopify.vue'),
        name: 'shopify',
      })
      // wordpressページルーティング
      routes.push({
        path: '/category/:wordpress/page/:p',
        component: resolve(__dirname, 'pages/category/wordpress.vue'),
        name: 'wordpress',
      })
      // etcページルーティング
      routes.push({
        path: '/category/:etc/page/:p',
        component: resolve(__dirname, 'pages/category/etc.vue'),
        name: 'etc',
      })
      // javascriptページルーティング
      routes.push({
        path: '/category/:javascript/page/:p',
        component: resolve(__dirname, 'pages/category/javascript.vue'),
        name: 'javascript',
      })
    },
  },
// ローディングバー設定
loading: {
    color: 'mediumseagreen',
    height: '1px'
  },
  generate: {
    async routes() {
      const limit = 12
      const category = 'htmlcss'
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

        const pages = await axios
        .get(`https://nuxtblog.microcms.io/api/v1/media`, {
          headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
        })
          .then((res) =>
            range(1, Math.ceil(res.data.totalCount / 1000)).map((p) => ({
              route: `/page/${p}`,
            }))
          )

      const categories = await axios
        .get(`https://nuxtblog.microcms.io/api/v1/category`, {
          headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
        })
          .then(({ data }) => {
            return data.contents.map((content) => content.id)
          });

      // カテゴリーページのページング
      const categoryPages = await Promise.all(
        categories.map(() =>
          axios.get(
            `https://nuxtblog.microcms.io/api/v1/media?limit=${limit}&filters=category[equals]${category}`,
            { headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY } }
          )
            .then((res) =>
              range(1, Math.ceil(res.data.totalCount / limit)).map((p) => ({
                route: `/category/${category}/page/${p}`,
              })))
      )
      )

      // 2次元配列になってるのでフラットにする
      const flattenCategoryPages = [].concat.apply([], categoryPages)
      return [...pages,...flattenCategoryPages]
    },
  },
}
