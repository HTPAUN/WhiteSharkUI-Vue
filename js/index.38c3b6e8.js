(function(t){function e(e){for(var o,a,r=e[0],i=e[1],c=e[2],p=0,b=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(b.length)b.shift()();return l.push.apply(l,c||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],o=!0,r=1;r<s.length;r++){var i=s[r];0!==n[i]&&(o=!1)}o&&(l.splice(e--,1),t=a(a.s=s[0]))}return t}var o={},n={index:0},l=[];function a(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=o,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(s,o,function(e){return t[e]}.bind(null,o));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/WhiteSharkUI-Vue/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=i;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("c31f")},"11e3":function(t,e,s){"use strict";s("7b9d")},"42b1":function(t,e,s){"use strict";s("f381")},"7b9d":function(t,e,s){},c31f:function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},l=[],a={name:"App"},r=a,i=(s("42b1"),s("2877")),c=Object(i["a"])(r,n,l,!1,null,null,null),u=c.exports,p=s("8c4f"),b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view"),s("ws-logo"),t._m(0),s("div",{staticClass:"page"},[s("p",{staticClass:"titleA"},[t._v("开发指南")]),s("ws-part",[s("p",{staticClass:"titleB"},[t._v("NPM安装")]),s("p",{staticClass:"detail"},[t._v("推荐使用 npm 的方式安装，它能更好地与 Webpack 打包工具一同配合使用。")]),s("ws-code",[s("ol",t._l(t.npm,(function(e){return s("li",{key:e,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)]),s("p",{staticClass:"titleB"},[t._v("快速上手")]),s("p",{staticClass:"detail"},[t._v("您可以在main.js中引入整个大白鲨UI。")]),s("ws-code",[s("ol",t._l(t.start,(function(e){return s("li",{key:e,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)])],1),s("p",{staticClass:"titleA"},[t._v("组件介绍")]),s("ws-part",[s("p",{staticClass:"titleB"},[t._v("按钮Button")]),s("p",{staticClass:"detail"},[t._v("按钮用于开始一个即时的操作。")]),s("p",{staticClass:"titleC"},[t._v("基础用法")]),s("ws-button",[t._v("默认")]),s("ws-button",{staticStyle:{margin:"30px"},attrs:{type:"red"}},[t._v("红色")]),s("ws-button",{staticStyle:{margin:"30px"},attrs:{type:"green"}},[t._v("绿色")]),s("ws-button",{staticStyle:{margin:"30px"},attrs:{type:"yellow"}},[t._v("黄色")]),s("ws-button",{staticStyle:{margin:"30px"},attrs:{type:"blue"}},[t._v("蓝色")]),s("ws-button",{staticStyle:{margin:"30px"},attrs:{type:"purple"}},[t._v("紫色")]),s("ws-code",[s("ol",t._l(t.button.basic,(function(e){return s("li",{key:e.code,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)]),s("p",{staticClass:"titleC"},[t._v("禁用模式")]),s("ws-button",{attrs:{disabled:""}},[t._v("默认")]),s("ws-button",{staticStyle:{margin:"30px"},attrs:{disabled:"",type:"red"}},[t._v("红色")]),s("ws-button",{staticStyle:{margin:"30px"},attrs:{disabled:"",type:"green"}},[t._v("绿色")]),s("ws-button",{staticStyle:{margin:"30px"},attrs:{disabled:"",type:"yellow"}},[t._v("黄色")]),s("ws-button",{staticStyle:{margin:"30px"},attrs:{disabled:"",type:"blue"}},[t._v("蓝色")]),s("ws-button",{staticStyle:{margin:"30px"},attrs:{disabled:"",type:"purple"}},[t._v("紫色")]),s("ws-code",[s("ol",t._l(t.button.disabled,(function(e){return s("li",{key:e.code,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)]),s("p",{staticClass:"titleC"},[t._v("块级按钮")]),s("div",{staticStyle:{"padding-left":"15px","padding-right":"30px"}},[s("ws-button",{staticStyle:{"margin-bottom":"30px"},attrs:{block:""}},[t._v("默认")]),s("ws-button",{staticStyle:{"margin-bottom":"30px"},attrs:{block:"",type:"red"}},[t._v("红色")]),s("ws-button",{staticStyle:{"margin-bottom":"30px"},attrs:{block:"",type:"green"}},[t._v("绿色")]),s("ws-button",{staticStyle:{"margin-bottom":"30px"},attrs:{block:"",type:"yellow"}},[t._v("黄色")]),s("ws-button",{staticStyle:{"margin-bottom":"30px"},attrs:{block:"",type:"blue"}},[t._v("蓝色")]),s("ws-button",{staticStyle:{"margin-bottom":"30px"},attrs:{block:"",type:"purple"}},[t._v("紫色")])],1),s("ws-code",[s("ol",t._l(t.button.block,(function(e){return s("li",{key:e.code,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)]),s("p",{staticClass:"titleC"},[t._v("自定义颜色按钮")]),s("ws-button",{attrs:{color:"#000000",borderColor:"#888888"}},[t._v("黑字灰线")]),s("ws-code",[s("ol",t._l(t.button.customize,(function(e){return s("li",{key:e.code,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)]),s("p",{staticClass:"titleC"},[t._v("图标按钮")]),s("div",[s("ws-button-star",{staticStyle:{margin:"30px"}}),s("ws-button-heart",{staticStyle:{margin:"30px"}}),s("ws-button-thumbs-up",{staticStyle:{margin:"30px"}})],1),s("div",[s("ws-button-star-counter",{staticStyle:{margin:"30px"}}),s("ws-button-heart-counter",{staticStyle:{margin:"30px"}}),s("ws-button-thumbs-up-counter",{staticStyle:{margin:"30px"}})],1),s("div",[s("ws-button-d-s-heart",{staticStyle:{margin:"30px"}}),s("ws-button-s-s-heart",{staticStyle:{margin:"5px"},attrs:{grade:5,maxHeart:6,hasCounter:!0}})],1),s("div",[s("ws-button-d-s-star",{staticStyle:{margin:"30px"}}),s("ws-button-s-s-star",{staticStyle:{margin:"5px"},attrs:{grade:9,maxStars:10,hasCounter:!0}})],1),s("ws-code",[s("ol",t._l(t.button.icon,(function(e){return s("li",{key:e.code,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)])],1),s("ws-part",[s("p",{staticClass:"titleB"},[t._v("输入框Input")]),s("p",{staticClass:"detail"},[t._v("通过鼠标或键盘输入字符.")]),s("p",{staticClass:"titleC"},[t._v("Line模式")]),s("ws-input-line",{staticStyle:{display:"inline-flex"},attrs:{type:"blue"},model:{value:t.type.line_input,callback:function(e){t.$set(t.type,"line_input",e)},expression:"type.line_input"}}),s("div",{staticStyle:{margin:"30px"}},[t._v(t._s(t.type.line_input))]),s("ws-code",[s("ol",t._l(t.input.line,(function(e){return s("li",{key:e.code,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)]),s("p",{staticClass:"titleC"},[t._v("Frame模式")]),s("ws-input-frame",{staticStyle:{display:"inline-flex"},attrs:{type:"yellow"},model:{value:t.type.frame_input,callback:function(e){t.$set(t.type,"frame_input",e)},expression:"type.frame_input"}}),s("div",{staticStyle:{margin:"30px"}},[t._v(t._s(t.type.frame_input))]),s("ws-code",[s("ol",t._l(t.input.frame,(function(e){return s("li",{key:e.code,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)]),s("p",{staticClass:"titleC"},[t._v("禁用模式")]),s("ws-input-line",{staticStyle:{display:"inline-flex",margin:"10px"},attrs:{disabled:"",type:"red"}}),s("ws-input-frame",{staticStyle:{display:"inline-flex",margin:"10px"},attrs:{disabled:"",type:"red"}}),s("ws-code",[s("ol",t._l(t.input.disabled,(function(e){return s("li",{key:e.code,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)])],1),s("ws-part",[s("p",{staticClass:"titleB"},[t._v("标签Label")]),s("p",{staticClass:"detail"},[t._v("用于标记。")]),s("p",{staticClass:"titleC"},[t._v("正常模式")]),s("ws-label",{attrs:{type:"red"}},[t._v("大白鲨UI")]),s("ws-label",{attrs:{type:"blue"}},[t._v("大白鲨UI")]),s("ws-label",{attrs:{type:"yellow"}},[t._v("大白鲨UI")]),s("ws-label",{attrs:{type:"green"}},[t._v("大白鲨UI")]),s("ws-label",{attrs:{type:"purple"}},[t._v("大白鲨UI")]),s("ws-code",[s("ol",t._l(t.label.normal,(function(e){return s("li",{key:e.code,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)]),s("p",{staticClass:"titleC"},[t._v("自定义模式")]),s("ws-label",{attrs:{"background-color":"#eeeeee",color:"#4e4e4e"}},[t._v("大白鲨UI")]),s("div",{staticStyle:{transform:"rotate(-5deg)",margin:"30px"}},[s("ws-label",{attrs:{"background-color":"#eeeeee",color:"#4e4e4e"}},[t._v("大白鲨UI")])],1),s("ws-code",[s("ol",t._l(t.label.customize,(function(e){return s("li",{key:e.code,staticStyle:{"list-style":"none","margin-bottom":"10px"}},[t._v(" "+t._s(e.code)+" ")])})),0)])],1),s("p",{staticClass:"titleA"},[t._v("To be continue ...")]),s("ws-part",[s("p",{staticClass:"titleC"},[t._v("大白鲨UI还会更新！！喜欢的朋友给个星！！！！")]),s("ws-code",[s("p",{staticClass:"detail"},[t._v("https://github.com/HTPAUN/WhiteSharkUI-Vue")])])],1)],1)],1)},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",{staticClass:"logo"},[t._v("------------------ 大白鲨UI ------------------")])])}],w={data(){return{type:{line_input:"",frame_input:""},npm:[{code:"npm install whitesharkui"}],start:[{code:"import WhiteSharkUI from 'whitesharkui'"},{code:"import 'whitesharkui/lib/whitesharkui.css'"},{code:"Vue.use(WhiteSharkUI)"}],button:{basic:[{code:"\x3c!-- 由type属性来选择颜色 --\x3e"},{code:"<ws-button>默认</ws-button>"},{code:'<ws-button type="red">红色</ws-button>'},{code:'<ws-button type="green">绿色</ws-button>'},{code:'<ws-button type="yellow">黄色</ws-button>'},{code:'<ws-button type="blue">蓝色</ws-button>'},{code:'<ws-button type="purple">紫色</ws-button>'}],disabled:[{code:"\x3c!-- 由disabled属性来选择禁用 --\x3e"},{code:"<ws-button disabled>默认</ws-button>"},{code:'<ws-button disabled type="red">红色</ws-button>'},{code:'<ws-button disabled type="green">绿色</ws-button>'},{code:'<ws-button disabled type="yellow">黄色</ws-button>'},{code:'<ws-button disabled type="blue">蓝色</ws-button>'},{code:'<ws-button disabled type="purple">紫色</ws-button>'}],block:[{code:"\x3c!-- 由block属性来选择块级 --\x3e"},{code:"<ws-button block>默认</ws-button>"},{code:'<ws-button block type="red">红色</ws-button>'},{code:'<ws-button block type="green">绿色</ws-button>'},{code:'<ws-button block type="yellow">黄色</ws-button>'},{code:'<ws-button block type="blue">蓝色</ws-button>'},{code:'<ws-button block type="purple">紫色</ws-button>'}],customize:[{code:"\x3c!-- 由color属性来选择字体颜色，由borderColor属性来选择下划线颜色 --\x3e"},{code:'<ws-button color="#000000" borderColor="#888888" >黑字灰线</ws-button>'}],icon:[{code:"\x3c!-- 由标签来选择组件，静态的评分按钮必须要写:grader、:maxHeart(Stars)、:hasCounters的值才可以使用 --\x3e"},{code:"<ws-button-star></ws-button-star>"},{code:"<ws-button-heart></ws-button-heart>"},{code:"<ws-button-thumbs-up></ws-button-thumbs-up>"},{code:"<ws-button-star-counter></ws-button-star-counter>"},{code:"<ws-button-heart-counter></ws-button-heart-counter>"},{code:"<ws-button-thumbs-up-counter></ws-button-thumbs-up-counter>"},{code:"<ws-button-d-s-heart></ws-button-d-s-heart>"},{code:'<ws-button-s-s-heart :grade="5" :maxHeart="6" :hasCounter="true"></ws-button-s-s-heart>'},{code:"<ws-button-d-s-star></ws-button-d-s-star>"},{code:'<ws-button-s-s-star :grade="9" :maxStars="10" :hasCounter="true"></ws-button-s-s-star>'}]},input:{line:[{code:"\x3c!-- 由type属性来选择颜色 --\x3e"},{code:'<ws-input-line type="blue"></ws-input-line>'}],frame:[{code:"\x3c!-- 由type属性来选择颜色 --\x3e"},{code:'<ws-input-frame type="yellow"></ws-input-frame>'}],disabled:[{code:"\x3c!-- 由disabled属性来选择禁用 --\x3e"},{code:'<ws-input-line disabled type="red"></ws-input-line>'},{code:'<ws-input-frame disabled type="red"></ws-input-frame>'}]},label:{normal:[{code:"\x3c!-- 由type属性来选择颜色 --\x3e"},{code:'<ws-label type="red">大白鲨UI</ws-label>'},{code:'<ws-label type="blue">大白鲨UI</ws-label>'},{code:'<ws-label type="yellow">大白鲨UI</ws-label>'},{code:'<ws-label type="green">大白鲨UI</ws-label>'},{code:'<ws-label type="purple">大白鲨UI</ws-label>'}],customize:[{code:"\x3c!-- 由color属性来选择字体颜色，由backgroundColor属性来选择背景颜色 --\x3e"},{code:'<ws-label background-color="#eeeeee" color="#4e4e4e">大白鲨UI</ws-label>'},{code:"\x3c!-- 在外层套一个<div>，内联css的transfrom属性还能改变标签角度哦~ --\x3e"},{code:'<div style="transform: rotate(-5deg);"><ws-label background-color="#eeeeee" color="#4e4e4e">大白鲨UI</ws-label></div>'}]}}}},y=w,m=(s("11e3"),Object(i["a"])(y,b,d,!1,null,null,null)),_=m.exports;o["a"].use(p["a"]);var v=new p["a"]({routes:[{path:"/",name:"HelloWorld",component:_}]}),f=s("0cb5"),x=s.n(f);s("fca1");o["a"].config.productionTip=!1,o["a"].use(x.a),new o["a"]({router:v,render:t=>t(u)}).$mount("#app")},f381:function(t,e,s){}});
//# sourceMappingURL=index.38c3b6e8.js.map