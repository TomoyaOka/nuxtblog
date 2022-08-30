<template>
  <div class="cover">
    <CommonLargeTitle name="404 - ページが見つかりません" />
    <div class="flex">
      <main class="main">
        <h1 class="error" v-if="error.statusCode === 404">
          <span>404</span><br />お探しのページは見つかりませんでした。
        </h1>
        <h1 class="error" v-else>
          <span>404</span><br />お探しのページは見つかりませんでした。
        </h1>
        <NuxtLink class="error-top" to="/">トップページへ戻る</NuxtLink>
      </main>
      <LayoutSidebar />
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
};
</script>

<style lang="scss">
$sp: 768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.error {
  font-size: 2.2rem;
  font-weight: bold;
  color: #26a69a;
  text-align: center;
  line-height: 1.7;
  margin: 100px 0 50px 0;
  @include sp {
    font-size: 1.6em;
  }
  span {
    font-size: 5rem;
    @include sp {
      font-size: 3.5rem;
    }
  }
  &-top {
    display: block;
    width: fit-content;
    font-size: 1.6rem;
    text-align: center;
    border-bottom: 1px #333 solid;
    margin: 0 auto;
    transition: 0.2s;
    @include sp {
      font-size: 1.4rem;
    }
    &:hover {
      transition: 0.2s;
      opacity: 0.5;
    }
  }
}
</style>
