<template>
  <div class="cover">
    <LargeTitle name="WordPress" />
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
  async asyncData() {
    const { data } = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media?filters=category[equals]wordpress`,
      { headers: { 'X-API-KEY': process.env.API_KEY } }
    )
    return {
      items: data.contents,
    };
  },
  head() {
    return {
      title: ' WordPress - Next'
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