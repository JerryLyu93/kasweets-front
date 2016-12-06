/**
 * Created by pandalv on 16/8/30.
 */
// 启动文件
import Vue from 'vue'
import './components/globalize'
import './services'
import router from './routes'
import store from './store'
import App from './app.vue'
import fastclick from 'fastclick'
import lodash from 'lodash'
window._ = lodash

fastclick.attach(document.body)
// polyfill
if (!window.HTMLCanvasElement.prototype.toBlob) {
  let Blob = window.Blob
  window.Object.defineProperty(window.HTMLCanvasElement.prototype, 'toBlob', {
    value: function (callback, type, quality) {
      let binStr = window.atob(this.toDataURL(type, quality).split(',')[1])
      let len = binStr.length
      let arr = new Uint8Array(len)

      for (let i = 0; i < len; i++) {
        arr[i] = binStr.charCodeAt(i)
      }

      callback(new Blob([arr], {type: type || 'image/png'}))
    }
  })
}
let rootVue = new Vue({
  router,
  store,
  render: h => h(App)
})
rootVue.$mount('#app')
/**
 * 根据https://github.com/vuejs/vue-devtools#NOTES
 * Vue 1.0.18以上版本需要如下配置devtools
 */
const __DEV__ = process.env.NODE_ENV !== 'production'
const __PROD__ = process.env.NODE_ENV === 'production'
if (__DEV__) {
  console.info('[当前环境] 开发环境')
  Vue.config.devtools = true
}

if (__PROD__) {
  console.info('[当前环境] 生产环境')
  Vue.config.devtools = false
}
