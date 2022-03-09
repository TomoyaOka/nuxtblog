<template>
  <div class="common-head">
    <div class="common-head__inner">
      <h2 class="common-head__title">{{ name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
 props: ['name']
};
</script>

<style lang="scss">
$sp:768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
  .common-head {
    width: 100%;
    background-color: var(--base-color);
    padding: 6rem 5rem;
    margin-bottom: 6rem;
    @include sp {
      padding: 3rem 2.3rem;
      margin-bottom: 3rem;
    }
    &__inner {
      margin: auto;
      padding: 0;
    }
    &__title {
      font-size: var(--xxl);
      color: var(--white-color);
      @include sp {
        font-size: var(--md);
        line-height: 1.45;
      }
    }
  }
</style>