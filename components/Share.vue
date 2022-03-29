<template>
  <section class="sns-share">
    <h2 class="sns-share__title">記事をシェア</h2>
    <ul class="sns-share__body">
      <li class="sns-share__list">
        <a
          :href="twitterLink"
          target="_blank"
          rel="noopener noreferrer"
          class="sns-twitter"
        >
          <img src="@/assets/img/twitter.png" alt="Twitter" />
        </a>
      </li>
      <li class="sns-share__list">
        <a
          :href="facebookLink"
          target="_blank"
          rel="noopener noreferrer"
          class="sns-facebook"
        >
          <img src="@/assets/img/facebook.svg" alt="FaceBook" />
        </a>
      </li>
      <li class="sns-share__list">
        <a
          :href="hatenaLink"
          target="_blank"
          rel="noopener noreferrer"
          class="sns-hatena"
        >
          <img src="@/assets/img/hatena.jpeg" alt="hatena" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    twitterLink() {
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        this.title
      )}&url=https://next-blog.site/media/${this.id}`;
    },
    facebookLink() {
      return `https://www.facebook.com/sharer.php?u=https://next-blog.site/media/${this.id}/`;
    },
    hatenaLink() {
      return `https://b.hatena.ne.jp/entry/https://next-blog.site/media/${this.id}/`;
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
.sns-share {
  padding-top: 3rem;
  &__title {
    font-size: var(--xl);
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    @include sp {
      font-size: var(--md);
      margin-bottom: 2rem;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20rem;
      transform: translateY(-50%);
      width: 10rem;
      height: 1px;
      background-color: var(--sub-color);
      @include sp {
        width: 6rem;
        right: 2rem;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 20rem;
      transform: translateY(-50%);
      width: 10rem;
      height: 1px;
      background-color: var(--sub-color);
      @include sp {
        width: 6rem;
        left: 2rem;
      }
    }
  }
  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__list {
    text-align: center;
  }
  a {
    display: block;
    width: 24rem;
    box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    transition: opacity 0.2s ease;
    @include sp {
      width: 11rem;
    }
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
  .sns-twitter {
    img {
      width: 4.12rem;
      @include sp {
        width: 2.4rem;
      }
    }
  }
  .sns-facebook {
    margin: 0 2rem;
    @include sp {
      margin: 0 1rem;
    }
    img {
      width: 3.4rem;
      @include sp {
        width: 2rem;
      }
    }
  }
  .sns-hatena {
    img {
      width: 3.4rem;
      @include sp {
        width: 2rem;
      }
    }
  }
}
</style>
