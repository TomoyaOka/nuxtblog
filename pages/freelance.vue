<template>
  <div class="container">
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
      `https://nuxtblog.microcms.io/api/v1/media?filters=category[equals]freelance`,
      { headers: { 'X-API-KEY': process.env.API_KEY } }
    )
    return {
      items: data.contents,
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

.container {
  width: 70%;
  padding: 0 15px;
  @include sp {
    width: 100%;
  }
}

.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 600px;
  margin: 50px 0;
  @include sp {
    display: block;
  }
  &::before {
    content: "";
    width: 340px;
    order: 1;
  }
  &::after {
    content: "";
    width: 390px;
  }
  &__item {
    display: block;
    width: 390px;
    min-height: 350px;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px rgb(212, 212, 212) solid;
    transition: 0.3s;
    position: relative;
    @include sp {
      width: 90%;
      margin: 20px auto;
      border: 1px #26a69a solid;
    }
    &:hover {
      border: 1px #26a69a solid;
      transition: 0.3s;
    }
    &-thumbnail {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 230px;
      border-bottom: 1px rgb(212, 212, 212) solid;
      @include sp {
        background-size: 300px;
      }
    }
    &-text {
      padding: 5px 10px;
      .day {
        font-size: 1.4rem;
        margin: 10px 0;
      }
      .title {
        font-size: 1.6rem;
        margin-top: 10px;
      }
    }
    img {
      width: 200px;
    }
    .box {
      display: flex;
      position: absolute;
      bottom: 20px;
      right: 10px;
      @include sp {
        bottom: 10px;
      }
    }
    .category {
      width: fit-content;
      font-size: 1.6rem;
      margin-top: 20px;
      padding: 5px 10px;
      background-color: rgb(117, 117, 117);
      color: #fff;
      @include sp {
        font-size: 1.3rem;
        padding: 9px 10px;
      }
    }
    .tag {
      width: fit-content;
      font-size: 1.6rem;
      margin-top: 20px;
      margin-left: 10px;
      padding: 5px 10px;
      background-color: rgb(117, 117, 117);
      color: #fff;
      @include sp {
        font-size: 1.3rem;
        padding: 9px 10px;
      }
    }
  }
}
</style>