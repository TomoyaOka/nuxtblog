<template>
  <aside class="sidebar">
    <div class="sidebar__inner">
      <div class="sidebar__content">
        <p class="sidebar__title">Categorys</p>
        <ul class="sidebar__list">
          <li><nuxt-link to="/category/htmlcss">HTML / CSS</nuxt-link></li>
          <li><nuxt-link to="/category/wordpress">WordPress</nuxt-link></li>
          <li><nuxt-link to="/category/javascript">JavaScript</nuxt-link></li>
          <li>
            <nuxt-link to="/category/vuenuxt">Vue.js / Nuxt.js</nuxt-link>
          </li>
          <li><nuxt-link to="/category/shopify">Shopify</nuxt-link></li>
          <li><nuxt-link to="/category/etc">その他</nuxt-link></li>
        </ul>
      </div>

      <div class="sidebar__content">
        <p class="sidebar__title">Changers</p>
        <ul class="sidebar__list">
          <li>
            <nuxt-link v-scroll-to="'#member01'" to="/about/#member01"
              >Tomoya Okada</nuxt-link
            >
          </li>
          <li>
            <nuxt-link v-scroll-to="'#member02'" to="/about/#member02"
              >Kyan</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
$sp: 768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.sidebar {
  width: 23%;
  min-height: 50rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  margin: 0 1rem 0 0;
  @include sp {
    width: 100%;
    margin: 5rem auto;
  }
  &__inner {
    position: sticky;
    top: 0;
    padding: 4rem 2rem;
  }
  &__content {
    margin-bottom: 6rem;
    @include sp {
      margin-bottom: 3.4rem;
    }
  }
  &__title {
    font-size: var(--md);
    margin-bottom: 1.6rem;
    padding-left: 2rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1.6rem;
      height: 1.6rem;
      background-color: var(--base-color);
    }
  }
  &__list {
    li {
      font-size: var(--sm);
      margin-bottom: 1rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0.3rem;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        background-color: #333;
      }
    }
    a {
      &:hover {
        opacity: 0.7;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
