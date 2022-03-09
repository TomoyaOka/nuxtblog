<template>
  <div class="cover">
    <LargeTitle name="Next" />
    <div class="flex">
      <main class="main front-page">
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
      items: ""
    };
  },
  head: {
    title: "Next"
  },
  async asyncData({ params }) {
    const page = params.p || "1";
    const limit = 10;
    const {
      data
    } = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media?limit=${limit}&offset=${(page -
        1) *
        limit}`,
      { headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY } }
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
