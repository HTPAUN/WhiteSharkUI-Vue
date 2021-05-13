<template>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-shayu"></use>
  </svg>
</template>

<script>
  import '@assets/icon/iconfont'
  import '@assets/icon/iconfont.css'
  export default {
        name: "ws-logo"
    }
</script>

<style scoped lang="scss">
  @import "@assets/styles/mixin.scss";
  .icon {
    width: px2rem(800);
    height: px2rem(800);
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-top: px2rem(200);
  }

</style>
