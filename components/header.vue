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
  background-image: url(@/assets/img/bg_plus.png);
  background-repeat: repeat;
  background-position: center;
  position: relative;
  @include sp {
    height: 70px;
    padding: 28px;
  }
  &__title {
    width: fit-content;
    font-size: 4rem;
    text-align: center;
    color:#333;
    margin: 0 auto;
    padding: 10px 20px 5px 20px;
    background-color: #fff;
    font-family: kateru-font;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    @include sp {
      font-size: 2rem;
    }
  }
}

</style>
