<template>
  <div class="header-wrap">
    <header class="header">
      <h1 class="header__title"><nuxt-link to="/">Next!!</nuxt-link></h1>
      <nav class="nav">
        <!-- PC -->
        <ul class="nav__ul">
          <li class="nav__ul-li">
            <nuxt-link to="/technology">技術系</nuxt-link>
          </li>
          <li class="nav__ul-li">
            <nuxt-link to="/design">デザイン</nuxt-link>
          </li>
          <li class="nav__ul-li">
            <nuxt-link to="/thinking">考え方</nuxt-link>
          </li>
          <li class="nav__ul-li">
            <nuxt-link to="/application">アプリ</nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- mode -->
      <div class="color-switch">
        <button @click="$colorMode.preference = 'light'" class="light"></button>
        <button @click="$colorMode.preference = 'dark'" class="dark"></button>
        <button @click="$colorMode.preference = 'sepia'" class="sepia"></button>
      </div>
      <!--  -->
      <!-- SP -->
      <div id="menu-open" :class="{ active: flag }" v-on:click="flag = !flag">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="menu-bg" :class="{ open: flag }" v-on:click="flag = false"></div>
      <nav id="menu-body" :class="{ open: flag }">
        <p class="sp-text">カテゴリー</p>
        <ul class="sp-ul">
          <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/technology" v-on:click.native="flag = false"
              >技術系</nuxt-link
            >
          </li>
          <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/design" v-on:click.native="flag = false"
              >デザイン</nuxt-link
            >
          </li>
          <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/thinking" v-on:click.native="flag = false"
              >考え方</nuxt-link
            >
          </li>
            <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/application" v-on:click.native="flag = false"
              >アプリ</nuxt-link
            >
          </li>
        </ul>

        <p class="sp-text">その他リンク</p>
        <a href="https://toom-design.jp/" class="link">ポートフォリオサイト</a>
        <a href="https://twitter.com/Create_toom" class="link mb10 mt10">Twitter:@Create_toom</a>
        <a href="https://note.com/toom_design" class="link">note:toom-design</a>
      </nav>
    </header>
  </div>
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
    background-color: rgb(78, 78, 78);
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

/*-----------------
      PC-menu
------------------*/

.header-wrap {
  @include sp {
    height: 70px;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background-image: url(@/assets/img/bg_plus.png);
  background-repeat: repeat;
  background-position: center;
  padding: 57px 50px;
  position: relative;
  @include sp {
    position: fixed;
    width: 100%;
    height: 70px;
    padding: 28px;
    z-index: 1000;
  }
  &__title {
    font-size: 4rem;
    color: #333;
    margin-left: 70px;
    font-family: kateru-font;
    @include sp {
      font-size: 2rem;
      margin-left: 0;
    }
  }
}

.nav {
  margin-right: 70px;
  &__ul {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 500px;
    @include sp {
      display: none;
    }
    &-li {
      font-size: 2rem;
      font-weight: bold;
      a {
        transition: .2s;
        &:hover {
          transition: .2s;
          color: #26a69a;
        }
      }
    }
  }
}
/*-----------------
      SP-menu
------------------*/
#menu-open {
  display: none;
  width: 60px;
  height: 60px;
  z-index: 9999;
  position: relative;
  top:-3px;
  transition: 0.2s;
  @include sp {
    display: block;
    width: 40px;
    height: 20px;
  }
  span {
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    left: 6px;
    background: #555;
    transition: 0.3s ease-in-out;

    &:nth-child(1) {
      top:0px;
    }
    &:nth-child(2) {
      top:10px;
    }
    &:nth-child(3) {
      top:20px;
    }
  }
}
#menu-bg {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  z-index: 9996;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;

  &.open {
    display: block;
  }
}
#menu-body {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9997;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translateX(100%);
  transition: 0.3s;

  &.open {
    transform: translateX(30%);
    overflow-y: scroll;
    transition: 0.3s;
  }

  .sp {
    &-text {
      font-size: 1.8rem;
      padding: 25px;
      background-image: url(@/assets/img/bg_plus.png);
      background-position: center;
      font-weight: bold;
    }
    &-ul {
      &__li {
        a {
          display: block;
          font-size: 1.6rem;
          font-weight: bold;
          padding: 20px 25px;
        }
      }
    }
  }
  .link {
    display: block;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 800;
    padding: 25px 20px;
  }
}

/* ナビ開いてる時のボタン */
#menu-open.active span:nth-child(1) {
  top : 10px;
  left: 6px;
  background :#555;
  transform        : rotate(-35deg);
}

#menu-open.active span:nth-child(2),
#menu-open.active span:nth-child(3) {
  top: 10px;
  background :#555;
  transform        : rotate(35deg);
}

</style>
