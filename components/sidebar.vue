<template>
<div class="sidebar">
  <div class="sidebar__icon"></div>
  <div class="sidebar__icon"></div>
  <div class="sidebar__icon"></div>
</div>
</template>

<style lang="scss">
$sp:768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.sidebar {
  width: 30%;
  margin-top: 50px;
  padding: 0 10px;
  border: 1px solid;
  @include sp {
    width: 70%;
    margin: 50px auto;
  }
  &__icon {
    width: 100%;
    height: 250px;
    margin: 10px auto;
    background-color: darkseagreen;
  }
}


</style>
