<template>
  <div>
    <button class="menu-btn" :class='{is_open : open}' @click='openAction'>
      <span class="line line _top" :class='{is_open : open}'></span>
      <span class="line line _middle" :class='{is_open : open}'></span>
      <span class="line line _bottom" :class='{is_open : open}'></span>
    </button>
    <nav class="nav" :class='{is_open : open}'>
      <p class="nav__title">- Categorys</p>
      <ul class="nav__body">
        <li class="nav__body-list" @click='openAction'><nuxt-link to="/htmlcss">HTML / CSS</nuxt-link></li>
        <li class="nav__body-list" @click='openAction'><nuxt-link to="/javascript">JavaScript</nuxt-link></li>
        <li class="nav__body-list" @click='openAction'><nuxt-link to="/vuenuxt">Vue.js / Nuxt.js</nuxt-link></li>
        <li class="nav__body-list" @click='openAction'><nuxt-link to="/wordpress">WordPress</nuxt-link></li>
        <li class="nav__body-list" @click='openAction'><nuxt-link to="/shopify">Shopify</nuxt-link></li>
        <li class="nav__body-list" @click='openAction'><nuxt-link to="/etc">その他</nuxt-link></li>
      </ul>
      <p class="nav__title">- Pages</p>
      <ul class="nav__body">
        <li class="nav__body-list" @click='openAction'><nuxt-link to="/about">サイトについて</nuxt-link></li>
        <li class="nav__body-list" @click='openAction'><nuxt-link v-scroll-to="'#member'" to="/about/#member">メンバーリスト</nuxt-link></li>
        <li class="nav__body-list" @click='openAction'><nuxt-link v-scroll-to="'#works'" to="/about/#works">ご依頼について</nuxt-link></li>
        <li class="nav__body-list" @click='openAction'><nuxt-link to="/contact">お問い合わせ</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    //Menuクラス追加
    openAction() {
      this.open = !this.open
    }
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

/*--------------
  menu-btn
-----------------*/
.menu-btn {
  display: block;
  width: 5rem;
  height: 4rem;
  // background-color: rgb(204, 204, 204);
  position: fixed;
  top: 1.6rem;
  right: 4rem;
  z-index: 1001;
  @include sp {
    top: 0.4rem;
    right: 2.3rem;
  }
  .line {
    display: block;
    width: 80%;
    height: 1px;
    background-color: #000;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease;
    pointer-events: none;
    @include sp {
      width: 60%;
    }
    &._top {
      top: 1.5rem;
      &.is_open {
        top: 2rem;
        transform: translateX(-50%) rotate(40deg);
      }
    }
    &._middle {
      top: 2rem;
      &.is_open {
        opacity: 0;
      }
    }
    &._bottom {
      top: 2.5rem;
      &.is_open {
        top: 2rem;
        transform: translateX(-50%) rotate(-40deg);
      }
    }
  }
}

/*--------------
  menu-body
-----------------*/
.nav {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  z-index: 1000;

  padding: 10vh 4rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  @include sp {
    padding: 10vh 2rem;
  }
  &::-webkit-scrollbar {
    display:none;
  }
  &.is_open {
    display: block;
  }
  &__title {
    font-size: calc(var(--xxl) + 1.6rem);
    color: rgb(88, 88, 88);
    margin-bottom: 6rem;
    @include sp {
      font-size: var(--xl);
      margin-bottom: 3rem;
    }
  }
  &__body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // border: 1px solid;
    @include sp {
      margin-bottom: 4rem;
    }
  }
  &__body-list {
    min-width: 45%;
    border-bottom: 1px rgb(179, 179, 179) solid;
    font-size: var(--xl);
    margin-bottom: 8rem;
    position: relative;
    @include sp {
      font-size: var(--sm);
      margin-bottom: 3rem;
    }
    a {
      display: block;
      min-width: 100%;
      transition: all 0.3s ease;
      padding: 1.6rem 0;
      position: relative;
      &:hover {
        opacity: 0.5;
      }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 4rem;
      height: 2rem;
      background: url('@/assets/img/arrow-right.svg') center no-repeat;
      background-size: 50%;
      pointer-events: none;
      @include sp {
        background-size: 35%;
      }
    }
    }
  }
}


</style>
