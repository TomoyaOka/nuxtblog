<template>
  <div class="page">
    <CommonLargeTitle :name="item.title" />
    <div class="flex">
      <main class="main details">
        <article class="entry">
          <p class="entry__breadcrumb">
            <nuxt-link to="/">トップ</nuxt-link> ― {{ item.title }}
          </p>

          <div class="post">
            <p>投稿者 : {{ item.postName }}</p>

            <div class="post-icon">
              <img :src="`/${item.postName}.png`" alt="" />
            </div>
          </div>

          <p class="day">
            公開日：<time>{{
              new Date(item.publishedAt).toLocaleDateString()
            }}</time>
          </p>
          <p class="day-reup">
            更新日：<time>{{
              new Date(item.updatedAt).toLocaleDateString()
            }}</time>
          </p>

          <h2 class="entry__title">{{ item.title }}</h2>
          <div class="entry__img">
            <span class="tag">{{ item.category.name }}</span>
            <img :src="item.thumbnail.url" alt="" />
          </div>

          <div class="entry__toc">
            <h4 class="entry__toc-title">目次</h4>
            <ul class="entry__toc-lists">
              <li
                v-for="item in toc"
                :key="item.id"
                :class="`list ${item.name}`"
              >
                <nuxt-link v-scroll-to="`#${item.id}`" to>
                  {{ item.text }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="entry__content" v-html="content"></div>
          <CommonShare :id="item.id" :title="item.title" />
        </article>
      </main>
      <LayoutSidebar />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cheerio from "cheerio";
import hljs from "highlight.js";

export default {
  head() {
    return {
      title: this.item.title + " - Next",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.item.description
        },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: this.item.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.item.description
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.item.thumbnail.url
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://next-blog.site/" + this.item.id + "/"
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: this.item.thumbnail.url
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: this.item.title
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: this.item.description
        }
      ]
    };
  },

  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media/${params.slug}`,
      {
        headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
      }
    );
    const $ = cheerio.load(data.content);
    $("pre code").each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass("hljs");
    });
    const headings = $("h2").toArray();
    const toc = headings.map(data => ({
      text: data.children[0].data,
      id: data.attribs.id,
      name: data.name
    }));
    return {
      item: data,
      content: $.html(),
      body: $.html(),
      toc
    };
  }
};
</script>

<style lang="scss">
@import "highlight.js/styles/atom-one-dark.css";

$sp: 768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

._sp {
  display: none;
  @include sp {
    display: block;
  }
}

.details {
  @include sp {
    padding: 0;
  }
}

.entry {
  background-color: var(--white-color);
  border-radius: 2rem;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  margin: 0 0 10rem 0;
  padding: 5rem 2rem;
  @include sp {
    border-radius: 0;
    margin: 2rem 0 3rem 0;
    padding: 4rem 1.6rem;
  }
  &__breadcrumb {
    font-size: 1.4rem;
    margin-bottom: 5rem;
    @include sp {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 3rem;
    }
  }
  .nuxt-link-active {
    margin-right: 0.5rem;
    color: var(--sub-color);
    border-bottom: 1px var(--sub-color) solid;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.5;
      transition: all 0.2s ease;
    }
  }

  .day {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    margin-right: 3rem;
    float: left;
    @include sp {
      font-size: 1.3rem;
      margin-right: 2rem;
    }
    &-reup {
      font-size: 1.4rem;
      margin-bottom: 2rem;
      @include sp {
        font-size: 1.3rem;
      }
    }
  }
  .post {
    display: flex;
    align-items: center;
    border-bottom: 1px #d3d3d3 solid;
    padding-bottom: 2rem;
    margin-bottom: 3rem;
    @include sp {
      justify-content: space-between;
    }
    p {
      font-size: 1.4rem;
      margin-right: 1rem;
      @include sp {
        font-size: 1.4rem;
        line-height: 1.5;
      }
    }
  }
  .post-icon {
    width: 7rem;
    height: 7rem;
    background-color: #fff;
    box-shadow: 0 0 3.5rem rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    overflow: hidden;
    @include sp {
      width: 8rem;
      height: 8rem;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  time {
    display: inline-block;
    font-size: 1.4rem;
  }

  &__title {
    font-size: var(--xl);
    font-weight: bold;
    font-weight: normal;
    line-height: 1.5;
    margin-bottom: 2rem;
    @include sp {
      font-size: calc(var(--xl) - 0.4rem);
      margin-bottom: 2rem;
    }
  }
  &__content {
    h2 {
      font-size: var(--xl);
      font-weight: normal;
      color: var(--sub-color);
      border-bottom: 1px rgb(207, 207, 207) solid;
      margin: 1.5rem 0;
      padding: 1rem 0;
      @include sp {
        font-size: 1.8rem;
        padding: 0.5rem 0;
      }
      span {
        color: var(--sub-color) !important;
      }
    }
    h3 {
      font-size: var(--md);
      font-weight: normal;
      color: var(--sub-color);
      border-left: 3px solid;
      margin: 1.5rem 0;
      padding: 0 1rem;
      @include sp {
        font-size: 1.6rem;
        padding: 0 0.5rem;
      }
      span {
        color: var(--sub-color) !important;
      }
    }
    p {
      font-size: var(--sm);
      line-height: 1.6;
      margin: 1rem 0;
      @include sp {
        font-size: 1.4rem;
      }
    }
    img {
      max-width: 100%;
      margin: 1.5rem auto;
      text-align: center;
    }
    // code {
    //   background-color: rgb(187, 187, 187);
    // }
    pre {
      margin: 1rem auto;
      padding: 1rem;
      overflow: auto;
      @include sp {
        padding: 0;
      }
      code {
        font-size: 1.4rem;
        font-family: "fonts", sans-serif !important;
        line-height: 1.6;
        border-radius: 1.2rem;
        padding: 3rem 2rem !important;
        @include sp {
          border-radius: 0.8rem;
          padding: 2rem 1rem !important;
        }
      }
    }

    a {
      font-size: 1.6rem;
      color: #26a69a;
      border-bottom: 1px solid;
      transition: 0.2s;
      line-height: 1.7;
      &:hover {
        opacity: 0.5;
        transition: 0.2s;
      }
      @include sp {
        font-size: 1.3rem;
      }
    }

    li {
      font-size: var(--sm);
      margin-bottom: 1rem;
      padding-left: 1.4rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 1px;
        background-color: rgb(151, 151, 151);
      }
    }

    blockquote {
      font-size: 1.6rem;
      line-height: 1.6;
      padding: 10px;
      background-color: rgb(235, 235, 235);
      @include sp {
        font-size: 1.4rem;
      }
    }

    strong {
      background-color: rgb(235, 235, 235) !important;
    }

    .embedly-embed {
      max-width: 100%;
      height: 40rem;
      @include sp {
        height: 30rem;
      }
    }
  }

  &__toc {
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 1.4rem;
    padding: 2rem;
    margin-bottom: 6rem;
    @include sp {
      border-radius: 1rem;
      margin-bottom: 3rem;
    }
    &-title {
      font-size: var(--xl);
      margin-bottom: 2rem;
      @include sp {
        font-size: var(--md);
      }
    }
    &-lists {
      li {
        margin-bottom: 2rem;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      a {
        display: block;
        width: fit-content;
        border-bottom: none !important;
        font-size: var(--sm);
        color: #333 !important;
        padding-left: 2rem;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 45%;
          left: 0.35rem;
          transform: translateY(-50%);
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 100%;
          background-color: var(--sub-color);
        }
      }
    }
  }

  &__img {
    max-width: 100%;
    border: 3px var(--base-color) solid;
    margin-bottom: 2rem;
    position: relative;
    img {
      width: 100%;
    }
    .tag {
      display: inline-block;
      min-width: 10rem;
      background-color: var(--base-color);
      font-size: var(--sm);
      color: var(--white-color);
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      padding: 2rem 0.5rem;
      @include sp {
        top: -0.2rem;
        left: -0.2rem;
        padding: 1rem 0.5rem;
      }
    }
  }
}
</style>
