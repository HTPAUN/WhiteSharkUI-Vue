<template>

  <div class="iconButton-thumbsUp" style="display: inline-flex">
    <svg class="icon" aria-hidden="true" v-bind="thumbsUp" @click="thumbsUp=!thumbsUp">
      <use :xlink:href="thumbsUp? '#icon-x-thumbsUp' :'#icon-thumbsUp'"></use>
    </svg>
  </div>

</template>

<script>
  import '@assets/icon/iconfont'
  export default {
    data(){
      return{
        thumbsUp:true
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
