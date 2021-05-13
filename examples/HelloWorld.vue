<template>
  <div id="app">
    <router-view/>
    <ws-logo></ws-logo>
    <div><p class="logo">------------------ 大白鲨UI ------------------</p></div>
    <div class="page">
      <!-- <p class="titleA">开发指南</p>
      <ws-part>
        <p class="titleB">NPM安装</p>
        <p class="detail">推荐使用npm的方式安装，它能更好地与Webpack打包工具一同配合使用。</p>
        <ws-code>jiazhuangwoyijingnonghaolenpm</ws-code>
        <p class="titleB">快速上手</p>
        <p class="detail">您可以在main.js中引入整个大白鲨UI。</p>
        <ws-code><template><p class="detail">zhegeyemeiyouyanjiuhaozenmenong</p></template></ws-code>
      </ws-part> -->
      <p class="titleA">组件介绍</p>
      <ws-part>
        <p class="titleB">按钮Button</p>
        <p class="detail">按钮用于开始一个即时的操作。</p>



        <p class="titleC">基础用法</p>
        <ws-button>默认</ws-button>
        <ws-button type="red" style="margin: 30px">红色</ws-button>
        <ws-button type="green" style="margin: 30px">绿色</ws-button>
        <ws-button type="yellow" style="margin: 30px">黄色</ws-button>
        <ws-button type="blue" style="margin: 30px">蓝色</ws-button>
        <ws-button type="purple" style="margin: 30px">紫色</ws-button>
        <ws-code>
          <ol>
            <li v-for="basic in button.basic" :key="basic.code" style="list-style: none;margin-bottom: 10px">
              {{basic.code}}
            </li>
          </ol>
        </ws-code>


        <p class="titleC">禁用模式</p>
        <ws-button disabled>默认</ws-button>
        <ws-button disabled type="red" style="margin: 30px">红色</ws-button>
        <ws-button disabled type="green" style="margin: 30px">绿色</ws-button>
        <ws-button disabled type="yellow" style="margin: 30px">黄色</ws-button>
        <ws-button disabled type="blue" style="margin: 30px">蓝色</ws-button>
        <ws-button disabled type="purple" style="margin: 30px">紫色</ws-button>
        <ws-code>
          <ol>
            <li v-for="disabled in button.disabled" :key="disabled.code" style="list-style: none;margin-bottom: 10px">
              {{disabled.code}}
            </li>
          </ol>
        </ws-code>



        <p class="titleC">块级按钮</p>
        <div style="padding-left: 15px;padding-right: 30px">
          <ws-button block style="margin-bottom: 30px">默认</ws-button>
          <ws-button block type="red" style="margin-bottom: 30px" >红色</ws-button>
          <ws-button block type="green" style="margin-bottom: 30px">绿色</ws-button>
          <ws-button block type="yellow" style="margin-bottom: 30px">黄色</ws-button>
          <ws-button block type="blue" style="margin-bottom: 30px">蓝色</ws-button>
          <ws-button block type="purple" style="margin-bottom: 30px">紫色</ws-button>
        </div>
        <ws-code>
          <ol>
            <li v-for="block in button.block" :key="block.code" style="list-style: none;margin-bottom: 10px">
              {{block.code}}
            </li>
          </ol>
        </ws-code>



        <p class="titleC">自定义颜色按钮</p>
        <ws-button color="#000000" borderColor="#888888" >黑字灰线</ws-button>
        <ws-code>
          <ol>
            <li v-for="customize in button.customize" :key="customize.code" style="list-style: none;margin-bottom: 10px">
              {{customize.code}}
            </li>
          </ol>
        </ws-code>



        <p class="titleC">图标按钮</p>
        <div>
          <ws-button-star style="margin: 30px"></ws-button-star>
          <ws-button-heart style="margin: 30px"></ws-button-heart>
          <ws-button-thumbs-up style="margin: 30px"></ws-button-thumbs-up></div>
        <div>
          <ws-button-star-counter style="margin: 30px"></ws-button-star-counter>
          <ws-button-heart-counter style="margin: 30px"></ws-button-heart-counter>
          <ws-button-thumbs-up-counter style="margin: 30px"></ws-button-thumbs-up-counter></div>
        <div>
          <ws-button-d-s-heart style="margin: 30px"></ws-button-d-s-heart>
          <ws-button-s-s-heart style="margin: 5px" :grade="5" :maxHeart="6" :hasCounter="true"></ws-button-s-s-heart>

        </div>
        <div>
          <ws-button-d-s-star style="margin: 30px"></ws-button-d-s-star>
          <ws-button-s-s-star style="margin: 5px" :grade="9" :maxStars="10" :hasCounter="true"></ws-button-s-s-star>
        </div>
        <ws-code>
          <ol>
            <li v-for="icon in button.icon" :key="icon.code" style="list-style: none;margin-bottom: 10px">
              {{icon.code}}
            </li>
          </ol>
        </ws-code>



      </ws-part>
      <ws-part>
        <p class="titleB">输入框Input</p>
        <p class="detail">通过鼠标或键盘输入字符.</p>

        <p class="titleC">Line模式</p>
        <ws-input-line type="blue" style="display: inline-flex" v-model="type.line_input"></ws-input-line>
        <div style="margin: 30px">{{type.line_input}}</div>
        <ws-code>
          <ol>
            <li v-for="line in input.line" :key="line.code" style="list-style: none;margin-bottom: 10px">
              {{line.code}}
            </li>
          </ol>
        </ws-code>


        <p class="titleC">Frame模式</p>
        <ws-input-frame type="yellow" style="display: inline-flex" v-model="type.frame_input"></ws-input-frame>
        <div style="margin: 30px" >{{type.frame_input}}</div>
        <ws-code>
          <ol>
            <li v-for="frame in input.frame" :key="frame.code" style="list-style: none;margin-bottom: 10px">
              {{frame.code}}
            </li>
          </ol>
        </ws-code>


        <p class="titleC">禁用模式</p>
        <ws-input-line disabled type="red" style="display: inline-flex;margin: 10px;"></ws-input-line>
        <ws-input-frame disabled type="red" style="display: inline-flex;margin: 10px;"></ws-input-frame>
        <ws-code>
          <ol>
            <li v-for="disabled in input.disabled" :key="disabled.code" style="list-style: none;margin-bottom: 10px">
              {{disabled.code}}
            </li>
          </ol>
        </ws-code>


      </ws-part>
      <ws-part>
        <p class="titleB">标签Label</p>
        <p class="detail">用于标记。</p>
        <p class="titleC">正常模式</p>
        <ws-label type="red">大白鲨UI</ws-label>
        <ws-label type="blue">大白鲨UI</ws-label>
        <ws-label type="yellow">大白鲨UI</ws-label>
        <ws-label type="green">大白鲨UI</ws-label>
        <ws-label type="purple">大白鲨UI</ws-label>
        <ws-code>
          <ol>
            <li v-for="normal in label.normal" :key="normal.code" style="list-style: none;margin-bottom: 10px">
              {{normal.code}}
            </li>
          </ol>
        </ws-code>


        <p class="titleC">自定义模式</p>
        <ws-label background-color="#eeeeee" color="#4e4e4e">大白鲨UI</ws-label>
        <div style="transform: rotate(-5deg);margin: 30px"><ws-label background-color="#eeeeee" color="#4e4e4e">大白鲨UI</ws-label></div>
        <ws-code>
          <ol>
            <li v-for="customize in label.customize" :key="customize.code" style="list-style: none;margin-bottom: 10px">
              {{customize.code}}
            </li>
          </ol>
        </ws-code>


      </ws-part>
      <p class="titleA">To be continue ...</p>
      <ws-part>
        <p class="titleC">大白鲨UI还会更新！！喜欢的朋友给个星！！！！</p>
        <ws-code><p class="detail">https://github.com/HTPAUN/WhiteSharkUI-Vue</p></ws-code>
      </ws-part>
    </div>
  </div>

</template>

<script>


  export default {
    data(){
      return {
        type: {
          line_input: '',
          frame_input: ''
        },
        button:{
          basic:[
            {code:'<!-- 由type属性来选择颜色 -->'},

            {code:'<ws-button>默认</ws-button>'},
            {code:'<ws-button type="red">红色</ws-button>'},
            {code:'<ws-button type="green">绿色</ws-button>'},
            {code:'<ws-button type="yellow">黄色</ws-button>'},
            {code:'<ws-button type="blue">蓝色</ws-button>'},
            {code:'<ws-button type="purple">紫色</ws-button>'},
          ],
          disabled:[
            {code:'<!-- 由disabled属性来选择禁用 -->'},

            {code:'<ws-button disabled>默认</ws-button>'},
            {code:'<ws-button disabled type="red">红色</ws-button>'},
            {code:'<ws-button disabled type="green">绿色</ws-button>'},
            {code:'<ws-button disabled type="yellow">黄色</ws-button>'},
            {code:'<ws-button disabled type="blue">蓝色</ws-button>'},
            {code:'<ws-button disabled type="purple">紫色</ws-button>'},
          ],
          block:[
            {code:'<!-- 由block属性来选择块级 -->'},

            {code:'<ws-button block>默认</ws-button>'},
            {code:'<ws-button block type="red">红色</ws-button>'},
            {code:'<ws-button block type="green">绿色</ws-button>'},
            {code:'<ws-button block type="yellow">黄色</ws-button>'},
            {code:'<ws-button block type="blue">蓝色</ws-button>'},
            {code:'<ws-button block type="purple">紫色</ws-button>'},
          ],
          customize:[
            {code:'<!-- 由color属性来选择字体颜色，由borderColor属性来选择下划线颜色 -->'},
            {code:'<ws-button color="#000000" borderColor="#888888" >黑字灰线</ws-button>'}
          ],
          icon:[
            {code:'<!-- 由标签来选择组件，静态的评分按钮必须要写:grader、:maxHeart(Stars)、:hasCounters的值才可以使用 -->'},
            {code:'<ws-button-star></ws-button-star>'},
            {code:'<ws-button-heart></ws-button-heart>'},
            {code:'<ws-button-thumbs-up></ws-button-thumbs-up>'},
            {code:'<ws-button-star-counter></ws-button-star-counter>'},
            {code:'<ws-button-heart-counter></ws-button-heart-counter>'},
            {code:'<ws-button-thumbs-up-counter></ws-button-thumbs-up-counter>'},
            {code:'<ws-button-d-s-heart></ws-button-d-s-heart>'},
            {code:'<ws-button-s-s-heart :grade="5" :maxHeart="6" :hasCounter="true"></ws-button-s-s-heart>'},
            {code:'<ws-button-d-s-star></ws-button-d-s-star>'},
            {code:'<ws-button-s-s-star :grade="9" :maxStars="10" :hasCounter="true"></ws-button-s-s-star>'},

          ]
        },
        input:{
          line:[
            {code:'<!-- 由type属性来选择颜色 -->'},
            {code:'<ws-input-line type="blue"></ws-input-line>'}
          ],
          frame:[
            {code:'<!-- 由type属性来选择颜色 -->'},
            {code:'<ws-input-frame type="yellow"></ws-input-frame>'}
          ],
          disabled:[
            {code:'<!-- 由disabled属性来选择禁用 -->'},
            {code:'<ws-input-line disabled type="red"></ws-input-line>'},
            {code:'<ws-input-frame disabled type="red"></ws-input-frame>'}
          ],
        },
        label:{
          normal:[
            {code:'<!-- 由type属性来选择颜色 -->'},
            {code:'<ws-label type="red">大白鲨UI</ws-label>'},
            {code:'<ws-label type="blue">大白鲨UI</ws-label>'},
            {code:'<ws-label type="yellow">大白鲨UI</ws-label>'},
            {code:'<ws-label type="green">大白鲨UI</ws-label>'},
            {code:'<ws-label type="purple">大白鲨UI</ws-label>'},
          ],
          customize:[
            {code:'<!-- 由color属性来选择字体颜色，由backgroundColor属性来选择背景颜色 -->'},
            {code:'<ws-label background-color="#eeeeee" color="#4e4e4e">大白鲨UI</ws-label>'},
            {code:'<!-- 在外层套一个<div>，内联css的transfrom属性还能改变标签角度哦~ -->'},
            {code:'<div style="transform: rotate(-5deg);"><ws-label background-color="#eeeeee" color="#4e4e4e">大白鲨UI</ws-label></div>'},
          ],
        },
      }
    }
  }

</script>

<style lang="scss">
  @import "~@assets/styles/mixin";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .logo{
    font-family: "hanyi",serif;
    font-size: px2rem(150);
    margin: 0;
  }

  .page{

    background-color: transparent;
    margin-top: px2rem(100);
    margin-right: px2rem(300);
    margin-left: px2rem(300);
    padding-top: px2rem(100);
  }


  .titleA{
    margin: 0;
    font-family: "Microsoft YaHei UI",serif;
    font-size: px2rem(70);
    text-align: left;
    padding-left: px2rem(50);
    padding-bottom: px2rem(80);
    padding-top: px2rem(100);
    font-weight: 600;
  }
  .titleB{
    margin: 0;
    font-family: "Microsoft YaHei UI",serif;
    font-size: px2rem(50);
    text-align: left;
    padding-left: px2rem(50);
    padding-bottom: px2rem(10);
    font-weight: 500;
  }

  .titleC{
    margin-top: px2rem(100);
    font-family: "hanyi",serif;
    font-size: px2rem(60);
    text-align: left;
    padding-left: px2rem(50);
    padding-bottom: px2rem(10);
    font-weight: 500;
    color: #4e4e4e;
  }

  .detail{
    margin: 0;
    font-family: "Microsoft YaHei UI",serif;
    font-size: px2rem(35);
    text-align: left;
    padding-left: px2rem(50);
  }


</style>