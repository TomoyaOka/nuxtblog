<template>
  <div class="cover">
    <LargeTitle name="意見・お問い合わせ" />
    <div class="flex">
      <main class="main">
        <div class="page-cover">
          <p class="contact__text">準備中</p>
        </div>
      </main>
      <Sidebar />
    </div>
  </div>
</template>

<script>
  export default {
  head: {
    script: [],
  },
  head() {
    return {
      title: ' 意見・お問い合わせ - Next'
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

.contact__text {
  font-size: var(--md);
}



</style>