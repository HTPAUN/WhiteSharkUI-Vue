<template>
  <button class="iconButton-heartCounter" @click="change">
    <div v-if="heart">
      <svg class="icon" aria-hidden="true" :heart="heart">
        <use xlink:href="#icon-x-thumbsUp" ></use>
      </svg>
    </div>
    <div v-else>
      <svg class="icon" aria-hidden="true" :heart="heart">
        <use xlink:href="#icon-thumbsUp" ></use>
      </svg>
    </div>
    <div class="num">{{ counter }}</div>

  </button>

</template>

<script>
  import '@assets/icon/iconfont'
  import '@assets/icon/iconfont.css'
  export default {
    name: 'ws-button-thumbs-up-counter',
    data() {
      return {
        heart:true,
        counter:1234
      }
    },
    methods:{
      change:function () {
        if(this.heart)
        {
          this.counter++;
        }
        else {
          this.counter--;
        }
        this.heart=!this.heart;
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "@assets/styles/mixin.scss";
  .iconButton-heartCounter{
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


