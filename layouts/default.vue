<template>
  <div class="wrap">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
$sp:768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.flex {
  display: flex;
  justify-content: space-around;
  @include sp {
    display: block;
  }
}

.main {
  width: 75%;
  padding: 0 2rem;
  @media (min-width:1400px) {
    width: 70%;
  }
  @include sp {
    width: 100%;
  }
}

</style>
