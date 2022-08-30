<template>
  <div class="cover">
    <CommonLargeTitle :name="categoryId" />
    <CommonSearchBar />
    <div class="flex">
      <main class="main">
        <CommonCard :items="items" />
        <CommonPagenation
          :pager="pager"
          :current="Number(page)"
          :category="categoryId"
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
  methods: {
    push() {}
  },
  async asyncData({ params }) {
    const url = "https://nuxtblog.microcms.io/api/v1/media";
    const page = params.p || "1";
    const categoryId = params.categoryId;
    const categorySmallName = new String(categoryId);
    const categoryLargeName = categorySmallName.toUpperCase();

    const limit = 12;
    const { data } = await axios.get(
      `${url}?limit=${limit}${
        categoryId === undefined ? "" : `&filters=category[equals]${categoryId}`
      }&offset=${(page - 1) * limit}`,
      { headers: { "X-MICROCMS-API-KEY": process.env.API_KEY } }
    );

    return {
      items: data.contents,
      categoryId,
      categoryLargeName,
      page,
      pager: [...Array(Math.ceil(data.totalCount / limit)).keys()]
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
