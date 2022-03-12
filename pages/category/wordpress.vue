<template>
  <div class="cover">
    <LargeTitle name="WordPress" />
    <div class="flex">
      <main class="main">
        <Card :items="items" />
        <Pagenation
          :pager="pager"
          :current="Number(page)"
          :category="selectedCategory"
          categoryName="wordpress"
        />
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
    const categoryId = 'wordpress'
    const limit = 12
    const { data } = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media?limit=${limit}${
        categoryId === undefined ? '' : `&filters=category[equals]${categoryId}`
      }&offset=${(page - 1) * limit}`,
      { headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY } }
    )
    const categories = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media?limit=12&filters=category[equals]${categoryId}`,
      {
        headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
      }
    );
    const selectedCategory =
      categoryId !== undefined
        ? categories.data.contents.find((content) => content.id === categoryId)
        : undefined;
    return {
      items: data.contents,
      selectedCategory,
      page,
      pager: [...Array(Math.ceil(data.totalCount / limit)).keys()],
    };
  },
  head() {
    return {
      title: 'WordPress - Next'
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