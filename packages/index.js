import wsButtonThumbsUp from "@components/iconButton/ws-button-thumsUp"
import wsButtonStar from "@components/iconButton/ws-button-star"
import wsButtonHeart from "@components/iconButton/ws-button-heart"
import wsButtonStarCounter from "@components/iconButton/ws-button-star-counter"
import wsButtonHeartCounter from "@components/iconButton/ws-button-heart-counter"
import wsButtonThumbsUpCounter from "@components/iconButton/ws-button-thumbsUp-counter"
import wsButtonDSStar from "@components/iconButton/DynamicScoringButton/ws-button-DS-star"
import wsButtonDSHeart from "@components/iconButton/DynamicScoringButton/ws-button-DS-heart"
import wsButtonSSStar from "@components/iconButton/StaticScoringButton/ws-button-SS-star"
import wsButtonSSHeart from "@components/iconButton/StaticScoringButton/ws-button-SS-heart"
import wsButton from "@components/ws-button"
import wsInputLine from "@components/ws-input-line"
import wsInputFrame from "@components/ws-input-frame"
import wsLabel from "@components/ws-label"
import wsLogo from "@components/ws-logo"
import wsCode from "@components/ws-code"
import wsPart from "@components/ws-part"
import '@assets/icon/iconfont.css'
import '@assets/styles/mixin.scss'
import '@assets/font/font.css'

const components = [
    wsButtonThumbsUp, wsButtonStar, wsButtonHeart, wsButtonStarCounter, wsButtonHeartCounter, 
    wsButtonThumbsUpCounter, wsButtonDSStar, wsButtonDSHeart, wsButtonSSStar, wsButtonSSHeart, 
    wsButton, wsInputLine, wsInputFrame, wsLabel, wsLogo, wsCode, wsPart
]
function install(Vue){
    // 全局注册所有的组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

// 判断是否直接引入文件，如果是就不调用 Vue.use()
// if(typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue)
// }

export default {
    install
}