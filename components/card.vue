<template>
  <div>
    <article class="card">
      <nuxt-link
        :to="item.id"
        v-for="item in items"
        :key="item.id"
        class="card__item"
      >
        <div
          class="card__item-thumbnail"
          :style="{ 'background-image': 'url(' + item.thumbnail.url + ')' }"
        ></div>
        <div class="card__item-text">
          <p class="title">{{ item.title }}</p>
        </div>
        <div class="box">
          <p class="category">{{ item.category.name }}</p>
          <p class="tag">{{ item.tag.name }}</p>
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