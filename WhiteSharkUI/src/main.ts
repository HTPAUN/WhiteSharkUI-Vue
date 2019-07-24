import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import router from "./router"

// @ts-ignore
import wsButtonStar from "./components/iconButton/ws-button-star"

// @ts-ignore
import wsButtonHeart from "./components/iconButton/ws-button-heart"

// @ts-ignore
import wsButtonStarCounter from "./components/iconButton/ws-button-star-counter"
// @ts-ignore
import wsButtonHeartCounter from "./components/iconButton/ws-button-heart-counter"

// @ts-ignore
import wsButtonThumbsUpCounter from "./components/iconButton/ws-button-thumbsUp-counter"

// @ts-ignore
import wsButtonDSHeart from "./components/iconButton/DynamicScoringButton/ws-button-DS-heart"

// @ts-ignore
import wsButtonDSStar from "./components/iconButton/DynamicScoringButton/ws-button-DS-star"

// @ts-ignore
import wsButtonThumbsUp from "./components/iconButton/ws-button-thumsUp"

// @ts-ignore
import wsButtonSSHeart from "./components/iconButton/StaticScoringButton/ws-button-SS-heart"

// @ts-ignore
import wsButtonSSStar from "./components/iconButton/StaticScoringButton/ws-button-SS-star"

// @ts-ignore
import wsButton from "./components/ws-button"


// @ts-ignore
import wsInputLine from "./components/ws-input-line"

// @ts-ignore
import wsInputFrame from "./components/ws-input-frame"

// @ts-ignore
import wsLabel from "./components/ws-label"

// @ts-ignore
import wsLogo from "./components/ws-logo"

// @ts-ignore
import wsPart from "./components/ws-part"

import './assets/icon/iconfont.css'
import './assets/styles/mixin.scss'


Vue.config.productionTip = false





// @ts-ignore
new Vue({
  template:
    '<ws-button-s-s-heart :grade="3" :maxStars="5" :hasCounter="true" />,' +
    '<SSBheart :grade="3" :maxStars="5" :hasCounter="true" />',

  components:{
    wsButtonThumbsUp,
    wsButtonStar,
    wsButtonStarCounter,
    wsButtonHeartCounter,
    wsButtonThumbsUpCounter,
    wsButtonDSStar,
    wsButtonDSHeart,
    wsButton,
    wsInputLine,
    wsInputFrame,
    wsLabel,
    wsLogo,
    wsPart,
    wsButtonSSHeart,
    wsButtonSSStar,
    wsButtonHeart



  },
  router,
  store,
  render:h=>h(App)
}).$mount('#app')



