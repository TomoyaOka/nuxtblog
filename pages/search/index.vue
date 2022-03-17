<template>
  <div class="cover">
    <LargeTitle :name='`検索結果 : ${items.length}件`' />
    <!-- Search -->
    <label class="search-box">
        <input
          v-model="q"
          class="search"
          type="text"
          @keyup.enter="(e) => search(e.target.value)"
          @keypress="setSearchable"
          placeholder="検索..."
        />
    </label>
    <!-- /Search -->
    <div class="flex">
      <main class="main front-page">
        <Card :items="items"/>

          <p
            v-show="items.length === 0"
            class="search__error"
          >
            記事がありませんでした。<br/>
            <span class="span">
              こんな検索はしていませんか？<br>
              - 誤った名称での検索・曖昧な検索...
            </span>
            <span class="span">
              検索ポイント<br>
              - ビュー → vue<br>
              - tail → tailwind
            </span>
          </p>
      </main>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchable: true,
      items: this.items || [],
      q: this.$route.query.q,
      value: ''
    };
  },
  head: {
    title: "検索結果 - Next"
  },
  created() {
    const query = this.$route.query;
    this.search(query.q);
  },
  methods: {
    setSearchable() {
      this.searchable = true;
    },
    async search(q = '') {
      if (!q.trim() || !this.searchable) {
        return;
      }
      const { data } = await axios
        .get(`https://nuxtblog.microcms.io/api/v1/media?q=${q}`,
                {
          headers: {
            "Content-Type": "application/json",
            "X-MICROCMS-API-KEY": process.env.API_KEY
          }
        }
        )
      this.items = data.contents;
      this.searchable = false;
    },
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

.search__error {
  font-size: var(--xl);
  line-height: 1.5;
  @include sp {
    font-size: var(--md);
  }

  .span {
    display: block;
    font-size: var(--sm);
    padding-top: 2rem;
  }
}
</style>