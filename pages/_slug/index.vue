<template>
  <div class="container unit">
    <article class="entry">
      <p class="entry__breadcrumb">
        <nuxt-link to="/">トップ</nuxt-link> ― {{ item.title }}
      </p>
      <h2 class="entry__title">{{ item.title }}</h2>
      <div class="entry__content" v-html="item.content"></div>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
   head() {
    return { 
      title: this.item.title ,
      meta: [
        { hid: 'description', name: 'description', content: this.item.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.item.title },
        { hid: 'og:description', property: 'og:description', content: this.item.description },
        { hid: 'og:image', property: 'og:image', content: this.item.thumbnail.url },
        { hid: 'og:url', property: 'og:url', content: 'https://next-blog.site/'+this.item.id+'/'},
        { hid: 'twitter:image', property: 'twitter:image', content: this.item.thumbnail.url },
        { hid: 'twitter:title', property: 'twitter:title', content: this.item.title },
        { hid: 'twitter:description', property: 'twitter:description', content: this.item.description },
      ],
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media/${params.slug}`,
      {
        headers: { "X-API-KEY": process.env.API_KEY },
      }
    );
    return {
      item:data
      }
  },
};
</script>

<style lang="scss">
$sp: 768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.entry {
  margin: 30px 0 100px 0;
  padding: 0 20px;
  @include sp {
    padding: 0 15px;
  }
  &__breadcrumb {
    font-size: 1.4rem;
    margin-bottom: 50px;
    @include sp {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 30px;
    }
  }
  .nuxt-link-active {
    margin-right: 5px;
    color: #26a69a;
    border-bottom: 1px #26a69a solid;
    transition: 0.2s;
    &:hover {
      opacity: 0.5;
      transition: 0.2s;
    }
  }
  &__title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 50px;
    @include sp {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }
  &__content {
    h2 {
      font-size: 2.2rem;
      font-weight: bold;
      color: #26a69a;
      border-bottom: 3px solid;
      margin: 15px 0;
      padding: 10px 0;
      @include sp {
        font-size: 1.8rem;
        padding: 5px 0;
      }
    }
    h3 {
      font-size: 1.8rem;
      font-weight: bold;
      color: #26a69a;
      border-left: 3px solid;
      margin: 15px 0;
      padding: 0 10px;
      @include sp {
        font-size: 1.6rem;
        padding: 0 5px;
      }
    }
    p {
      font-size: 1.6rem;
      line-height: 1.6;
      margin: 10px 0;
      @include sp {
        font-size: 1.4rem;
      }
    }
    img {
      max-width: 100%;
      margin: 15px auto;
      text-align: center;
    }

    pre {
      background-color: rgb(22, 22, 22);
      margin: 10px auto;
      padding: 10px;
      overflow: auto;
      code {
        color: #fff;
        font-size: 1.4rem;
      }
    }

    a {
      font-size: 1.6rem;
      font-weight: bold;
      color: #26a69a;
      border-bottom: 1px solid;
      transition: 0.2s;
      &:hover {
        opacity: 0.5;
        transition: 0.2s;
      }
    }
  }
}
</style>
