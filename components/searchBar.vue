<template>
  <label class="search-box">
    <input
      class="input"
      type="text"
      @keypress="setSearchable"
      @keypress.enter="search"
      placeholder="検索..."
    />
  </label>
</template>

<script>
export default {
  data() {
    return {
      searchable: false,
    };
  },
  methods: {
    setSearchable() {
      this.searchable = true;
    },
    search(e) {
      if (!e.target.value.trim() || !this.searchable) {
        return;
      }
      this.$router.push({ path: '/search', query: { q: e.target.value } });
    },
  },
};
</script>

<style lang="scss" scoped>
$sp:768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

.search-box {
  width: 20rem;
  background-color: #fff;
  border-radius: 0.8rem;
  font-size: var(--sm);
  position: absolute;
  top: 12rem;
  right: 3.2rem;
  padding: 1rem 1rem;
  @include sp {
    width: 14rem;
    border-radius: 0.4rem;
    top: 7rem;
    right: 2rem;
  }
  input {
    width: 100%;
    height: 4rem;
    border-bottom: 1px rgb(185, 185, 185) solid;
    padding: 0 0.5rem;
    @include sp {
      height: 2.4rem;
    }
  }
}

</style>