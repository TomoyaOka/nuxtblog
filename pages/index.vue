<template>
  <div class="cover">
    <CommonLargeTitle name="Next" />
    <CommonSearchBar />
    <div class="flex">
      <main class="main front-page">
        <p class="total"><span>総合記事数 : </span>{{ this.all }}件</p>
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
      items: "",
      total: "",
      all: ""
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
    // 一覧記事用
    const { data } = await axios.get(
      `${url}?limit=${limit}${
        categoryId === undefined ? "" : `&filters=category[equals]${categoryId}`
      }&offset=${(page - 1) * limit}`,
      { headers: { "X-MICROCMS-API-KEY": process.env.API_KEY } }
    );
    // カテゴリー関係
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
    // トータル記事数用
    const allItem = await axios.get(`${url}?limit=10000`, {
      headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
    });

    return {
      selectedCategory,
      page,
      pager: [...Array(Math.ceil(data.totalCount / limit)).keys()],
      items: data.contents,
      total: allItem.data.contents
    };
  },
  mounted() {
    this.$store.dispatch("post/getList", { all: this.total }); // allItemで取得したデータをstoreに保存
    this.all = this.$store.state.post.total.all.length; // トータル記事数
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

.front-page .total {
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
  @include sp {
    text-align: right;
    margin-bottom: 0;
    padding-top: 1rem;
  }
}
.front-page .total span {
  font-size: 1.4rem;
  @include sp {
    font-size: 1.3rem;
  }
}
</style>
