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
            <nuxt-link to="/thinking">考え方</nuxt-link>
          </li>
          <li class="nav__ul-li">
            <nuxt-link to="/gadget">ガジェット</nuxt-link>
          </li>
          <li class="nav__ul-li">
            <nuxt-link to="/application">アプリ</nuxt-link>
          </li>
        </ul>
      </nav>
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
            <nuxt-link to="/thinking" v-on:click.native="flag = false"
              >考え方</nuxt-link
            >
          </li>
          <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/gadge" v-on:click.native="flag = false"
              >ガジェット</nuxt-link
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
    }
  }
}
/*  バーガーメニュー  */
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
      background-color: rgb(235, 235, 235);
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
/*  /バーガーメニュー  */
</style>
