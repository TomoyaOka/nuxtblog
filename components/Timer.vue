<template>
  <div class="timer">
    <p class="timer__number">{{ time }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: ""
    };
  },
  mounted() {
    let timerLoad = setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      let current_date = new Date();
      this.time =
        current_date.getHours() +
        ":" +
        current_date.getMinutes() +
        ":" +
        current_date.getSeconds();
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

.timer__number {
  position: absolute;
  top: 3rem;
  left: 14rem;
  @include sp {
    font-size: 1.4rem;
    top: 1.8rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
