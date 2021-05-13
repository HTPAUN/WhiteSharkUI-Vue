import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import '@assets/icon/iconfont.css'
// import '@assets/styles/mixin.scss'
import WhiteSharkUI from '../packages'

Vue.config.productionTip = false
Vue.use(WhiteSharkUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
