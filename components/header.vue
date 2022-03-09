<template>
    <header class="header">
      <div class="header__inner">
      <h1 class="header__title"><nuxt-link to="/">Next</nuxt-link></h1>
      <!-- mode -->
      <!-- <div class="color-switch">
        <button @click="$colorMode.preference = 'light'" class="light"></button>
        <button @click="$colorMode.preference = 'dark'" class="dark"></button>
        <button @click="$colorMode.preference = 'sepia'" class="sepia"></button>
      </div> -->
      <!--  -->
      <Menu />
      </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      button:false,
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
.dark-mode {
  body {
    background-color: #091a28;
    color:rgb(228, 228, 228);
  img {
    filter: grayscale(50%);
  }
  span {
    color:rgb(228, 228, 228)!important;
  }
  blockquote {
    span {
    color:#333!important;
    }
  }
  }
  .card__item {
    background-color: rgb(238, 238, 238);
    color:#333;
    &-thumbnail {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(51,51,51,.1);
        width: 100%;
        height: 100%;
      }
    }
  }
  .header {
    background-image: url(@/assets/img/bg_plus-dark.png);
    background-size: 100px;
    color: #333;
  }
  .footer {
    background-image: url(@/assets/img/bg_plus-dark.png);
    background-size: 100px;
  }

  #menu-body {
    color:#333;
  .sp-text {
    background-image: url(@/assets/img/bg_plus-dark.png);
  }
  }
  pre {
    // background-color: rgb(78, 78, 78);
  }
  .footer__copy {
    color: #333;
  }

  u {
    background-color: #333;
  }

}

.sepia-mode body {
  background-color: #f5f1e7;
  color: #433422;
}
.color-switch {
    position: absolute;
    top: 0;
    right: 0;
  @include sp {
    display: block;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translateX(50%) translateY(-50%);
  }
  button {
    width: 35px;
    height: 35px;
    transition: .2s;
    &:hover {
      transition: .2s;
      border: 1px #08da9b solid;
    }
  }
  .light {
    background-color: rgb(233, 233, 233);
    background-image: url(@/assets/img/sun.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;

  }
  .dark {
    background-color: #333;
    background-image: url(@/assets/img/moon.png);
    background-size: 18px;
    background-repeat: no-repeat;
    background-position: center;
  }
  .sepia {
    background-color: #f1e7d0;
    background-image: url(@/assets/img/coffee.png);
    background-size: 22px;
    background-repeat: no-repeat;
    background-position: center;
  }
}



</style>
