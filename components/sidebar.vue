<template>
  <div class="sidebar">
    <a href="https://toom-design.jp/" target="_blank" rel="noopener noreferrer"
      ><div class="sidebar__banner">
        <img src="@/assets/img/hp-banner.png" alt="web制作依頼はこちら" /></div
    ></a>
    <a
      href="https://note.com/toom_design"
      target="_blank"
      rel="noopener noreferrer"
      ><div class="sidebar__banner">
        <img src="@/assets/img/note-banner.png" alt="noteはこちら" /></div
    ></a>

    <div class="sidebar__about">
      <p class="about">投稿者情報</p>
      <div class="img"></div>
      <p class="text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    </div>
  </div>
</template>

<style lang="scss">
$sp: 768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.sidebar {
  width: 30%;
  margin-top: 50px;
  padding: 0 10px;
  @include sp {
    width: 70%;
    margin: 50px auto;
  }
  &__banner {
    width: 100%;
    margin: 10px auto;
    transition: 0.2s;
    position: relative;
    &:hover::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #166d5a;
      opacity: 0.5;
      transition: 0.2s;
    }
    img {
      width: 100%;
    }
  }
  &__about {
    margin: 80px 0;

    .about {
      font-size: 2.2rem;
      font-weight: bold;
      text-align: center;
    }
    .img {
      width: 150px;
      height: 150px;
      background-color: darkslategray;
      margin: 20px auto;
    }

    .text {
      font-size: 1.6rem;
      @include sp {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
