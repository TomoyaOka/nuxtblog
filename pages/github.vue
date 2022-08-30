<template>
  <div class="cover">
    <CommonLargeTitle name="GithubCodePlace" />
    <div class="flex">
      <main class="main">
        <p class="read-text">
          本サイトを運営者がGithubにまとめているコードスニペット類を置いています。<br />
          コードはご自由にお使いください。使用に関しての不具合等に関しては一切責任を負いかねますので、あらかじめご了承ください。
        </p>
        <article class="github-article">
          <h2>■ ハンバーガーメニュー @class構文</h2>
          <div id="script"></div>
        </article>
      </main>
      <LayoutSidebar />
    </div>
  </div>
</template>

<script>
if (process.client) {
  var postscribe = require("postscribe");
}
export default {
  head() {
    return {
      title: " GithubCodePlace - Next"
    };
  },
  mounted() {
    postscribe(
      "#script",
      `<script src="https://gist.github.com/GithubNuxt/7576832fc9902c8df185db935e83ae54.js"><\/script>`
    );
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
#script {
  height: 50rem;
  overflow-y: scroll;
  margin-bottom: 16rem;
}
.read-text {
  font-size: 1.4rem;
  line-height: 1.7;
  margin-bottom: 4rem;
}
.gist-file {
}
.github-article {
  margin-bottom: 4rem;
  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
}
</style>
