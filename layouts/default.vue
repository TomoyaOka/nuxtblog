<template>
  <div>
    <Header />
    <div class="flex unit mb100">
    <Nuxt />
    <Sidebar />
    </div>
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
  @include sp {
    display: block;
  }
}
</style>
