<template>
  <div class="cover">
    <CommonLargeTitle name="Next" />
    <CommonSearchBar />
    <div class="flex">
      <main class="main front-page">
        <CommonCard :items="items" />
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
    return {
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
