<template>
  <div class="container unit">
  <article class="entry">
    <p class="entry__breadcrumb"><nuxt-link to="/">トップ</nuxt-link> ― {{ title }}</p>
    <h2 class="entry__title">{{ title }}</h2>
    <div class="entry__content" v-html="content"></div>
  </article>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media/${params.slug}`,
      {
        headers: { 'X-API-KEY': '4ede2e2b-eb03-4493-88e6-4c81621c4858' }
      }
    )
    return data
  }
}
</script>

<style lang="scss">
$sp:768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.entry {
  margin: 30px 0 100px 0;
  padding: 0 20px;
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
    border-bottom: 1px solid;
    &:hover {
      color: #26A69A;
    }
  }
  &__title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    @include sp {
      font-size: 1.6rem;
      margin-bottom: 10px;
    }
  }
  &__content {

    h2 {
      font-size: 2.2rem;
      font-weight: bold;
      color: #26A69A;
      border-bottom: 3px solid;
      margin: 15px 0;
      padding: 10px 0;
    @include sp {
      font-size: 1.8rem;
      padding: 5px 0;
    }
    }
    h3 {
      font-size:1.8rem;
      font-weight: bold;
      color: #26A69A;
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
  }
}

</style>
