<template>
  <div class="cover">
    <CommonLargeTitle name="サイトについて" />
    <CommonSearchBar />
    <div class="flex">
      <main class="main page">
        <div class="page-cover">
          <section class="about">
            <h2 class="about__title">Nextについて</h2>
            <p class="about__text">
              Nextは、Web制作周りやEC関連の記事を定期的に更新している技術ブログです。<br />
              学習の過程での備忘録を兼ねて更新していますので、間違いやより良いものがあった場合はお問い合わせよりご連絡をお願いいたします。<br />
              尚、記事内にあるコード等はそのままご利用していただいて問題ありません。
            </p>
            <table class="about__table">
              <tbody>
                <tr>
                  <th>運営元</th>
                  <td>KRAFT</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>群馬県前橋市</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="member" class="about-member">
            <h2 class="about__title">メンバーリスト</h2>
            <div id="member01" class="about-member__list">
              <a href="/" class="name" target="_blank" rel="noopener noreferrer"
                ><u>Tomoya Okada</u></a
              >
              <p class="text">
                群馬県を拠点にWeb制作周り〜フロントエンドを担当しています。<br />案件以外でも個人制作を沢山しています。<br />ゲームについても沢山語れます。
              </p>
            </div>
            <div id="member02" class="about-member__list">
              <a
                href="https://twitter.com/kyan_8gi"
                class="name"
                target="_blank"
                rel="noopener noreferrer"
                ><u>Kyan</u></a
              >
              <p class="text">
                名古屋市を拠点にWEB制作（主にコーディング）をしています。<br />Liquidを使用したShopify構築ができます。<br />音楽とドラムと本が好きです。
              </p>
            </div>
          </section>
        </div>
      </main>
      <LayoutSidebar />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    script: []
  },
  head() {
    return {
      title: " サイトについて - Next"
    };
  },
  mounted() {
    const hash = this.$route.hash;
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash);
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

.container {
  width: 70%;
  padding: 0 15px;
  @include sp {
    width: 100%;
  }
}

.page {
  @include sp {
    padding: 0;
  }
}

.page-cover {
  background-color: var(--white-color);
  border-radius: 2rem;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  margin: 0 0 10rem 0;
  padding: 5rem 2rem;
  @include sp {
    width: 100%;
    border-radius: 0;
    margin: 2rem 0 3rem 0;
    padding: 4rem 2rem;
  }
}

.about {
  &__title {
    font-size: var(--xl);
    font-weight: normal;
    color: var(--sub-color);
    border-bottom: 1px rgb(207, 207, 207) solid;
    margin: 1.5rem 0 2rem 0;
    padding: 1rem 0;
    @include sp {
      font-size: 1.8rem;
      padding: 0.5rem 0;
      margin: 1rem 0 1rem 0;
    }
  }
  &__text {
    font-size: var(--sm);
    line-height: 1.75;
    margin-bottom: 4rem;
    @include sp {
      margin-bottom: 3rem;
    }
  }
  &__table {
    width: 100%;
    th {
      font-size: var(--sm);
      padding: 1.4rem 0;
      @include sp {
        padding: 1rem 0;
      }
    }
    td {
      font-size: var(--sm);
      padding: 1.4rem 0;
      @include sp {
        padding: 1rem 0;
      }
    }
  }
}

/*------------------
 about-member
--------------------*/
.about-member {
  padding-top: 6rem;

  &__list {
    border-bottom: 1px rgb(207, 207, 207) solid;
    padding: 1rem 0 2rem 0;
    &:last-of-type {
      border-bottom: none;
    }
    &:nth-of-type(n + 2) {
      .name {
        padding-top: 2rem;
      }
    }
    .name {
      display: block;
      width: fit-content;
      font-size: var(--md);
      padding-bottom: 1rem;
    }
    .text {
      font-size: var(--sm);
      line-height: 1.75;
      padding-bottom: 1rem;
    }
  }
}

/*------------------
 about-works
--------------------*/
</style>
