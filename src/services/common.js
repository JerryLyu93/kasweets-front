// 通用api模块
import axios from 'axios'

export default {
  getUserData () {
    // 通常是返回一个axios请求后的promise对象, 因为后台接口还没有, 所以先用伪promise代替
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          // 是数据结构
        })
      }, 500)
    })
  }
}