<template>
  <div class="cover">
    <LargeTitle name="HTML / CSS" />
    <div class="flex">
      <main class="main">
        <Card :items="items" />
      </main>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import axios from "axios";
  export default {
      data() {
    return {
      items: "",
    };
  },
  head: {
    script: [],
  },
  async asyncData({params}) {
    const page = params.p || '1'
    const categoryId = 'htmlcss'
    const limit = 2
    const { data } = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media?limit=${limit}${
        categoryId === undefined ? '' : `&filters=category[equals]${categoryId}`
      }&offset=${(page - 1) * limit}`,
      { headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY } }
    )
    return {
      items: data.contents,
    };
  },
  head() {
    return {
      title: 'HTML / CSS - Next'
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