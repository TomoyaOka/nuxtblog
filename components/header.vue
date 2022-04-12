<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__title"><nuxt-link to="/">Next</nuxt-link></h1>
      <Menu />
    </div>
    <Timer />
  </header>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      button: false
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

.header {
  width: 100%;
  background-color: var(--white-color);
  padding: 2rem 5rem;
  z-index: 1000;
  @include sp {
    padding: 1.5rem 2.3rem;
  }
  &__inner {
    margin: auto;
  }
  &__title {
    font-size: var(--xl);
    @include sp {
      font-size: var(--md);
    }
    &:hover {
      opacity: 0.7;
      transition: all 0.3s ease;
    }
  }
}

/*-----------------
       mode
------------------*/
</style>
