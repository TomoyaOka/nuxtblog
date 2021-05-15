<template>
<div>
  <header class="header">
    <h1 class="header__title"><nuxt-link to="/">CHALLENGE</nuxt-link></h1>
  </header>
</div>
</template>

<style lang="scss">
$sp:768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.header {
  height: 150px;
  padding: 55px;
  background-color: #fff;
  border-bottom:1px #333 solid;
  @include sp {
    height: 70px;
    padding: 28px;
  }
  &__title {
    font-size: 4rem;
    text-align: center;
    color:#333;
    font-family: kateru-font;
    @include sp {
      font-size: 2rem;
    }
  }
}

</style>
