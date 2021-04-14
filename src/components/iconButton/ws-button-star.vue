<template>

  <div class="iconButton-star" style="display: inline-flex">
    <svg class="icon" aria-hidden="true" v-bind="star" @click="star=!star">
      <use :xlink:href="star? '#icon-x-star' :'#icon-star'"></use>
    </svg>
  </div>

</template>

<script>
  import '../../assets/icon/iconfont'
  export default {
    data(){
      return{
        star:true
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../../assets/styles/mixin.scss";
  .icon {
    width: px2rem(100);
    height: px2rem(100);
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>
