<template>
<div class="card__flex">
    <article class="card" v-for="item in items" :key="item.id">
      <nuxt-link :to="'/media/' + item.id " class="card__item">
        <div
          class="card__thumbnail"
          :style="{ 'background-image': 'url(' + item.thumbnail.url + ')' }"
        ></div>
          <h2 class="card__title">{{ item.title }}</h2>
          <div class="card__bottom">
            <time class="card__day">{{ new Date(item.publishedAt).toLocaleDateString() }}</time>
            <p class="card__author">POST : {{ item.postName }}</p>
          </div>
      </nuxt-link>
    </article>
    </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
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

.card__flex {
  display: flex;
  flex-wrap: wrap;
  gap:1.4rem;
  @include sp {
    gap:1rem;
  }
}
.card {
  position: relative;
  margin: 0 0 1rem 0;
  @include sp {
    display: block;
    width: 100%;
    margin: 2rem auto 0 auto;
  }
  &::before {
    content: "";
    width: 30rem;
    order: 1;
  }
  &::after {
    content: "";
    width: 30rem;
  }
  &__item {
    display: block;
    width: 30rem;
    min-height: 26rem;
    background-color: var(--white-color);
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0,0,0,0.1);
    border-radius: 1rem;
    transition: all 0.3s ease;
    padding: 0 1.6rem;
    position: relative;
    @include sp {
      width: 100%;
      margin: 0;
    }
    &:hover {
      box-shadow: 0.2rem 0.4rem 0.5rem rgba(0,0,0,0.15);
      transition: all 0.3s ease;
    }
  }
    &__thumbnail {
      height: 15rem;
      border-radius: 1rem 1rem 0 0;
      background-size: 90%;
      background-repeat: no-repeat;
      background-position: center;
      border-bottom: 1px rgb(226, 226, 226) solid;
    }
    &__title {
      min-height: 6rem;
      font-size: var(--sm);
      line-height: 1.4;
      padding: 1.6rem 0 1rem 0;
    }

    &__bottom {
      display: flex;
      align-items: center;
      padding: 1.6rem 0 1rem 0;
    }
    &__day {
      font-size: calc(var(--sm) - 0.2rem);
      color: rgb(150, 150, 150);
      padding-right: 1rem;
    }
    &__author {
      font-size: calc(var(--sm) - 0.2rem);
    }
}
</style>