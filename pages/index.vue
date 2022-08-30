<template>
  <div class="cover">
    <CommonLargeTitle name="Next" />
    <CommonSearchBar />
    <div class="flex">
      <main class="main front-page">
        <CommonCard :items="items" />
        <CommonPagenation
          :pager="pager"
          :current="Number(page)"
          :category="selectedCategory"
        />
      </main>
      <LayoutSidebar />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: ""
    };
  },
  head: {
    title: "Next"
  },
  async asyncData({ params }) {
    const url = "https://nuxtblog.microcms.io/api/v1/media";
    const page = params.p || "1";
    const categoryId = params.categoryId;
    const limit = 12;
    const { data } = await axios.get(
      `${url}?limit=${limit}${
        categoryId === undefined ? "" : `&filters=category[equals]${categoryId}`
      }&offset=${(page - 1) * limit}`,
      { headers: { "X-MICROCMS-API-KEY": process.env.API_KEY } }
    );
    const categories = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media?limit=12&filters=category[equals]${categoryId}`,
      {
        headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
      }
    );
    const selectedCategory =
      categoryId !== undefined
        ? categories.data.contents.find(content => content.id === categoryId)
        : undefined;
    return {
      selectedCategory,
      page,
      pager: [...Array(Math.ceil(data.totalCount / limit)).keys()],
      items: data.contents
    };
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
</style>
