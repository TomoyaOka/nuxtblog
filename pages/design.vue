<template>
  <div class="container">
    <h2 class="card-title mt50">デザイン</h2>
    <Card :items="items" />
  </div>
</template>

<script>
import axios from "axios";
  export default {
      data() {
    return {
      items: "" /*  itemsにデータを格納   */,
    };
  },
  head: {
    script: [],
  },
  async asyncData() {
    const { data } = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media?filters=category[equals]design`,
      { headers: { 'X-API-KEY': process.env.API_KEY } }
    )
    return {
      items: data.contents,
    };
  },
  head() {
    return {
      title: 'デザイン - Next!!'
    }
  }
};
</script>

<style lang="scss">
$sp: 768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

.container {
  width: 70%;
  padding: 0 15px;
  @include sp {
    width: 100%;
  }
}


</style>