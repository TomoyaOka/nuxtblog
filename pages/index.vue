<template>
  <div class="container">
    <article class="card">
      <nuxt-link
        :to="item.id"
        v-for="item in items"
        :key="item.id"
        class="card__item"
      >
        <div
          class="card__item-thumbnail"
          :style="{ 'background-image': 'url(' + item.thumbnail.url + ')' }"
        ></div>
        <div class="card__item-text">
          <p class="title">{{ item.title }}</p>
        </div>
        <div class="box">
          <p class="category">{{ item.category.name }}</p>
          <p class="tag">{{ item.tag.name }}</p>
        </div>
      </nuxt-link>
    </article>
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
      'https://nuxtblog.microcms.io/api/v1/media' /*  コンテンツURLを記述    */,
      {
        headers: { 'X-API-KEY' : process.env.API_KEY } /*  持ってきたいデータのAPI_KEYを記述    */,
      }
    );
    return {
      items: data.contents,
    };
  },
};
</script>

<style lang="scss">
$sp:768px;
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
    order:1;
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
    border:3px rgb(134, 134, 134) solid;
    transition: 0.3s;
    position: relative;
      @include sp {
      width: 90%;
      margin: 20px auto;
      border:2px #26A69A solid;
      }
    &:hover {
      border:3px #26A69A solid;
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
          bottom:10px;
        }
      }
      .category {
        width: fit-content;
        font-size: 1.6rem;
        margin-top: 20px;
        padding: 5px 10px;
        background-color: #333;
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
        background-color: #333;
        color: #fff;
        @include sp {
          font-size: 1.3rem;
          padding: 9px 10px;
        }
      }
  }
}
</style>
