<template>

   <div class="iconButton-heart" style="display: inline-flex">
   <svg class="icon" aria-hidden="true" :heart="heart" @click="heart=!heart">
     <use :xlink:href="heart? '#icon-heart' :'#icon-heartBroken'"></use>
   </svg>
   </div>

</template>

<script>
  import '@assets/icon/iconfont'
  export default {
    name: 'ws-button-heart',
    data() {
      return {
        heart: true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@assets/styles/mixin";
  .icon {
    width: px2rem(100);
    height: px2rem(100);
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
