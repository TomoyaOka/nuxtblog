<template>
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__flex">
        <ul class="footer__list">
          <li>Details</li>
          <li><nuxt-link to="/about">サイトについて</nuxt-link></li>
          <li><nuxt-link v-scroll-to="'#member'" to="/about/#member">メンバーリスト</nuxt-link></li>
        </ul>

        <ul class="footer__list">
          <li>Works</li>
          <li><nuxt-link v-scroll-to="'#works'" to="/about/#works">お仕事依頼について</nuxt-link></li>
        </ul>

        <ul class="footer__list">
          <li>ETC</li>
          <!-- <li><nuxt-link to="/privacy">利用規約</nuxt-link></li> -->
          <li><nuxt-link to="/contact">✉️ ご意見・お問い合わせ</nuxt-link></li>
        </ul>
        </div>
      </div>
      <p class="footer__copy">©copyright 2021 Next</p>
    </footer>
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
  background-color: var(--white-color);
  padding: 2rem 0;
  margin-top: 10rem;
  @include sp {
    margin-top: 5rem;
  }
  &__inner {
    max-width: var(--max);
    margin: auto;
    @include sp {
      padding: 0 2rem;
    }
  }
  &__flex {
    display: flex;
    justify-content: space-between;
    padding: 7rem 0;
    @include sp {
      display: block;
      padding: 6rem 0 2rem 0;
    }
  }
  &__list {
    @include sp {
      margin-bottom: 3rem;
    }
    li {
      font-size: var(--sm);
      margin-bottom: 2rem;
      &:nth-of-type(1) {
        font-size: var(--md);
        min-width: 30rem;
        border-bottom: 1px rgb(226, 226, 226) solid;
        padding-bottom: 0.4rem;
        @include sp {
          min-width: 10rem;
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
  &__copy {
    font-size: calc(var(--sm) - 0.2rem);
    text-align: center;
  }
}
</style>