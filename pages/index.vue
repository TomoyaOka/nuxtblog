<template>
  <div class="container">
    <div class="front">
        <nuxt-link class="front__content border" to="/technology"
          ><img src="@/assets/img/technology.png"
        /></nuxt-link>
        <nuxt-link class="front__content border" to="/thinking"
          ><img src="@/assets/img/thinking.png"
        /></nuxt-link>
        <nuxt-link class="front__content border" to="/gadget"
          ><img src="@/assets/img/gadget.png"
        /></nuxt-link>
        <nuxt-link class="front__content border" to="/application"
          ><img src="@/assets/img/application.png"
        /></nuxt-link>
    </div>
    <h2 class="card-title">最新投稿</h2>
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
  async asyncData({ params }) {
    const page = params.p || "1";
    const limit = 4;
    const {
      data,
    } = await axios.get(
      `https://nuxtblog.microcms.io/api/v1/media?limit=${limit}&offset=${
        (page - 1) * limit
      }`,
      { headers: { "X-API-KEY": process.env.API_KEY } }
    );
    return {
      items: data.contents,
    };
  },
};
</script>

<style lang="scss">
$sp: 768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

.front {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 40px;
  &::after {
    content: "";
    width: 400px;
    margin: 20px auto;
  }
  &__content {
    display: block;
    width: 400px;
    margin: 20px auto;
    position: relative;
    @include sp {
      margin: 10px auto;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #166d5a;
      opacity: 0;
      transition: 0.2s;
    }
      &:hover::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #166d5a;
      opacity: 0.5;
      transition: 0.2s;
    }
    img {
      width: 100%;
    }
  }
  .border {
    box-shadow: 2px 2px 5px rgba(51,51,51,.1);
  }
}

.card-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #26a69a;
  border-bottom: 3px solid;
  margin: 15px 20px;
  padding: 10px 0;
  @include sp {
    font-size: 1.8rem;
    padding: 5px 0;
    margin: 10px;
  }
}
</style>
