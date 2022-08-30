<template>
  <div class="pagenation">
    <ul class="pagenation__pager">
      <li v-if="current > 1" class="arrow">
        <nuxt-link :to="getPath(current - 1)">
          ＜
        </nuxt-link>
      </li>
      <li v-if="3 < current" class="page">
        <nuxt-link :to="getPath(1)" class="page">
          1
        </nuxt-link>
      </li>
      <li v-if="4 < current" class="omission">
        ...
      </li>
      <li
        v-for="p in pager"
        v-show="current - 3 <= p && p <= current + 1"
        :key="p"
        class="page"
        :class="{ active: current === p + 1 }"
      >
        <nuxt-link :to="getPath(p + 1)">
          {{ p + 1 }}
        </nuxt-link>
      </li>
      <li v-if="current + 3 < pager.length" class="omission">
        ...
      </li>
      <li v-if="current + 2 < pager.length" class="page">
        <nuxt-link :to="getPath(pager.length)">
          {{ pager.length }}
        </nuxt-link>
      </li>
      <li v-if="current < pager.length" class="arrow">
        <nuxt-link :to="getPath(current + 1)">
          ＞
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pager: {
      type: Array,
      required: false,
      default: () => []
    },
    current: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: false,
      default: undefined
    }
  },
  methods: {
    getPath(p) {
      if (this.category !== undefined) {
        return `/category/${this.category}/page/${p}`;
      } else {
        return `/page/${p}`;
      }
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

.pagenation {
  &__pager {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 6rem;
    li {
      font-size: var(--sm);
      margin-right: 0.6rem;
      &:last-of-type {
        margin-right: 0;
      }
    }

    .page {
      a {
        display: block;
        width: 3.7rem;
        text-align: center;
        padding: 1rem 0;
        @include sp {
          width: 3.6rem;
          padding: 0.8rem 0;
        }
      }
    }
    .active {
      color: var(--sub-color);
      background-color: var(--bg-color);
      border-radius: 1rem;
      box-shadow: 0 0 4rem rgba($color: #000000, $alpha: 0.1);
      pointer-events: none;
      @include sp {
        border-radius: 0.4rem;
      }
    }
  }
}
</style>
