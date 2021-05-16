<template>
  <div>
    <footer class="footer">
      <div class="footer__sns">
        <p class="sns"><a href="https://twitter.com/Create_toom"><img src="@/assets/img/twitter.png"></a></p>
        <p class="sns"><a href="#"><img src="@/assets/img/inst.png"></a></p>
      </div>
      <p class="footer__copy">©copyright 2021.5.30 CHALLENGE</p>
    </footer>
  </div>
</template>

<script>

</script>

<style lang="scss">
$sp:768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.footer {
  background-image: url(@/assets/img/bg_plus.png);
  background-repeat: repeat;
  background-position: center;
  padding-top: 20px;
  &__sns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    .sns {
    width: 50px;
    margin: 10px;
    @include sp {
      width: 40px;
    }
    img {
      width: 100%;
    }
    }
  }
  &__copy {
    font-size: 1.4rem;
    text-align: center;
  }
}
</style>