<template>
  <div :class="{
    'ws-input-red':type === 'red',
    'ws-input-blue':type === 'blue' || type === '',
    'ws-input-yellow':type === 'yellow',
    'ws-input-purple':type === 'purple',
    'ws-input-green':type === 'green',}"
  >

    <input
      :disabled="disabled"
      :placeholder="placeholder"

      :value="value"
      @input="handleInput"
      class="ws-input-inner"
      ref="input">

  </div>
</template>

<script>
  export default {
    name: "ws-input",
    props:{
      type:{
        type: String,
        default:'blue'
      },
      value:{
        type:String,
        default: ''
      },
      placeholder:{
        type:String,
        default:'请输入内容~'
      },
      disabled:{
        type:Boolean,
        default:false
      },
      margin: {
        type:Number,
        default:0
      },
      frame:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        data:'',
      }
    },
    methods:{
      handleInput(event){
        this.$emit('input',event.target.value)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/styles/mixin";

  .ws-input-red{
    width: px2rem(400);
    position: relative;
    font-family: "Microsoft YaHei UI",serif;
    font-size: px2rem(35);
    outline: none;
    .ws-input-inner{
      font-family: "Microsoft YaHei UI",serif;
      letter-spacing: px2rem(3);
      font-weight: 600;
      text-align: center;

      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      box-sizing: border-box;

      color: #606266;
      display: inline-block;
      font-size: inherit;
      outline: none;
      border: none;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 5px;
      width: 100%;

      &:hover {
        border-radius: 5px;
        border: dashed  #EB4962;
      }
      &:focus {
        color: #4e4e4e;
        border: solid  #EB4962;
      }
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        font-weight: 400;
        color: #ccc;
        font-size: px2rem(30);
      }
      &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
      }
    }
  }

  .ws-input-yellow{
    width: px2rem(400);
    position: relative;
    font-family: "Microsoft YaHei UI",serif;
    font-size: px2rem(35);
    outline: none;
    .ws-input-inner{
      font-family: "Microsoft YaHei UI",serif;
      letter-spacing: px2rem(3);
      font-weight: 600;
      text-align: center;

      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      box-sizing: border-box;

      color: #606266;
      display: inline-block;
      font-size: inherit;
      outline: none;
      border: none;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 5px;
      width: 100%;

      &:hover {
        border: dashed  #ffd700;
      }
      &:focus {
        color: #4e4e4e;
        border: solid  #ffd700;
      }
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        font-weight: 400;
        color: #ccc;
        font-size: px2rem(30);
      }
      &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
      }
    }
  }

  .ws-input-green{
    width: px2rem(400);
    position: relative;
    font-family: "Microsoft YaHei UI",serif;
    font-size: px2rem(35);
    outline: none;
    .ws-input-inner{
      font-family: "Microsoft YaHei UI",serif;
      letter-spacing: px2rem(3);
      font-weight: 600;
      text-align: center;

      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      box-sizing: border-box;

      color: #606266;
      display: inline-block;
      font-size: inherit;
      outline: none;
      border: none;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 5px;
      width: 100%;

      &:hover {
        border-radius: 5px;
        border: dashed  #69e924;
      }
      &:focus {
        color: #4e4e4e;
        border: solid  #69e924;
      }
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        font-weight: 400;
        color: #ccc;
        font-size: px2rem(30);
      }
      &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
      }
    }
  }

  .ws-input-purple{
    width: px2rem(400);
    position: relative;
    font-family: "Microsoft YaHei UI",serif;
    font-size: px2rem(35);
    outline: none;
    .ws-input-inner{
      font-family: "Microsoft YaHei UI",serif;
      letter-spacing: px2rem(3);
      font-weight: 600;
      text-align: center;

      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      box-sizing: border-box;

      color: #606266;
      display: inline-block;
      font-size: inherit;
      outline: none;
      border: none;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 5px;
      width: 100%;

      &:hover {
        border-radius: 5px;
        border: dashed  #774ee0;
      }
      &:focus {
        color: #4e4e4e;
        border: solid  #774ee0;
      }
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        font-weight: 400;
        color: #ccc;
        font-size: px2rem(30);
      }
      &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
      }
    }
  }

  .ws-input-blue{
    width: px2rem(400);
    position: relative;
    font-family: "Microsoft YaHei UI",serif;
    font-size: px2rem(35);
    outline: none;
    .ws-input-inner{
      font-family: "Microsoft YaHei UI",serif;
      letter-spacing: px2rem(3);
      font-weight: 600;
      text-align: center;

      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      box-sizing: border-box;

      color: #606266;
      display: inline-block;
      font-size: inherit;
      outline: none;
      border: none;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 5px;
      width: 100%;

      &:hover {
        border-radius: 5px;
        border: dashed  #12b2e6;
      }
      &:focus {
        color: #4e4e4e;
        border: solid  #12b2e6;
      }
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        font-weight: 400;
        color: #ccc;
        font-size: px2rem(30);
      }
      &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
      }
    }
  }



</style>
