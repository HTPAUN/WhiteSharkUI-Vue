<template>
    <button 
      :class="classNames"
      :disabled="disabled"
      @click="click"
      class="ws-button"
      :style="customizeColor"
    >
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: "ws-button",
  props:{
    type:{
      type : String,
      default : 'default'
    },
    disabled: {
        type : Boolean,
        default: false
    },
    color:{
        type : String,
        default: ''
    },
    borderColor:{
        type : String,
        default: ''
    },
    block: {
        type : Boolean,
        default:false
    }
  },
  data(){
    return{
      show:false,
      customizeColor: {
        color:this.color,
        borderColor:this.borderColor,
      }
    }
  },
  computed:{
    classNames(){
      let type = this.type
      let block = this.block
      let disabled = this.disabled
      return {
        'ws-button-red':type === 'red',
        'ws-button-green':type === 'green',
        'ws-button-blue':type === 'blue',
        'ws-button-yellow':type === 'yellow',
        'ws-button-purple':type === 'purple',
        'block': block,
        'width-100':block,
        'disabled':disabled
      }
    }
  },
  methods:{
    click(){
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@assets/styles/mixin";
  .ws-button {
    position: relative;
    display: inline-block;
    margin: px2rem(15);
    padding: px2rem(5) px2rem(40);
    height: px2rem(68);
    line-height: 1.5;
    box-sizing: border-box;

    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    cursor: pointer;
    border: 2.5px solid transparent;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;

    font-size: px2rem(35);
    letter-spacing: px2rem(3);
    border-radius: 1px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    outline: none;

    &:hover,
    &:focus {
      color: #1744c2;
      background-color: #fff;
      border-bottom: dashed  #6689ed;
    }

    &.disabled{
      color: #858585;
      &:hover,
      &:focus {
        color: #858585;
        background-color: #fff;

        border: 2.5px solid #ebeef5;
      }
    }
  }

  .ws-button-red{
    color: #fff;
    background-color: #EB4962;
    border-radius: 5px;
    font-family: "Microsoft YaHei UI",serif;
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: rgba(235,73,98,0.3) 0px 2px 8px 2px;
    &:hover,
    &:focus {
      color: #4e4e4e;
      background-color: #fff;
      border: 2.5px solid #EB4962;

    }
    &:after {
      background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    }
    &.disabled {
      color: #fff;
      background-color: #fa8c93;
      border-color: #fa8c93;
      &:hover,
      &:focus {
        color: #fff;
        background-color: #fa8c93;
        border-color: #fa8c93;

      }
    }
  }

  .ws-button-green{
    color: #fff;
    background-color: #69e924;
    border-radius: 5px;
    font-family: "Microsoft YaHei UI",serif;
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: rgba(105,233,36,0.3) 0px 2px 8px 2px;
    &:hover,
    &:focus {
      color: #4e4e4e;
      background-color: #fff;
      border: 2.5px solid #69e924;

    }
    &:after {
      background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    }
    &.disabled {
      color: #fff;
      background-color: #a6f27a;
      border-color: #a6f27a;
      &:hover,
      &:focus {
        color: #fff;
        background-color: #a6f27a;
        border-color: #a6f27a;
      }
    }
  }

  .ws-button-yellow{
    color: #fff;
    background-color: #ffd700;
    border-radius: 5px;
    font-family: "Microsoft YaHei UI",serif;
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: rgba(255,230,0,0.3)  0px 2px 8px 2px;
    &:hover,
    &:focus {
      color: #4e4e4e;
      background-color: #fff;
      border: 2.5px solid #ffd700;

    }
    &:after {
      background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    }
    &.disabled {
      color: #fff;
      background-color: #ffe474;
      border-color: #ffe474;
      &:hover,
      &:focus {
        color: #fff;
        background-color: #ffe474;
        border-color: #ffe474;
      }
    }
  }

  .ws-button-blue{
    color: #fff;
    background-color:#12b2e6;
    border-radius: 5px;
    font-family: "Microsoft YaHei UI",serif;
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: rgba(41,178,229,0.3)  0px 2px 8px 2px;
    &:hover,
    &:focus {
      color: #4e4e4e;
      background-color: #fff;
      border: 2.5px solid #12b2e6;

    }
    &:after {
      background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    }
    &.disabled {
      color: #fff;
      background-color: #86cbef;
      border-color: #86cbef;
      &:hover,
      &:focus {
        color: #fff;
        background-color: #86cbef;
        border-color: #86cbef;
      }
    }
  }

  .ws-button-purple{
    color: #fff;
    background-color: #774ee0;
    border-radius: 5px;
    font-family: "Microsoft YaHei UI",serif;
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: rgba(106,77,213,0.3)  0px 2px 8px 2px;
    &:hover,
    &:focus {
      color: #4e4e4e;
      background-color: #fff;
      border: 2.5px solid #774ee0;

    }
    &:after {
      background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    }
    &.disabled {
      color: #fff;
      background-color: #ab88ec;
      border-color: #ab88ec;
      &:hover,
      &:focus {
        color: #fff;
        background-color: #ab88ec;
        border-color: #ab88ec;
      }
    }
  }

  .disabled{
    cursor: not-allowed;
    color: #c0c4cc;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
    &:hover,
    &:focus {
      color: #c0c4cc;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }
  
  .block {
    display: block !important;
  }

  .width-100 {
    width: 100%;
  }

</style>
