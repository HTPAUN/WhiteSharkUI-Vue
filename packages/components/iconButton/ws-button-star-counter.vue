<template>
<button class="iconButton-starCounter" @click="change">
    <div v-if="star">
    <svg class="icon" aria-hidden="true" :star="star">
      <use xlink:href="#icon-x-star" ></use>
    </svg>
    </div>
  <div v-else>
    <svg class="icon" aria-hidden="true" :star="star">
      <use xlink:href="#icon-star" ></use>
    </svg>
  </div>
  <div class="num">{{ counter }}</div>

  </button>

</template>

<script>
  import '@assets/icon/iconfont'
  export default {
    name: 'ws-button-star-counter',
    data() {
      return {
        star:true,
        counter:1234
      }
    },
    methods:{
      change:function () {
        if(this.star)
        {
          this.counter++;
        }
        else {
          this.counter--;
        }
        this.star=!this.star;
      }
    }

  }
</script>

<style scoped lang="scss">
@import "@assets/styles/mixin";
  .iconButton-starCounter{
    width: px2rem(220);
    height: px2rem(100);
    border-radius: 20px;
    background-color: #fff;
    outline: none;
  }

  .icon {
    width: px2rem(60);
    height: px2rem(60);
    vertical-align:px2rem(60);
    fill: currentColor;
    float:left;
  }
  .num{
    width: auto;
    height: px2rem(50);
    vertical-align: -0.15em;
    text-align: center;
    line-height: px2rem(70);
    font-size: px2rem(40);

  }
</style>
