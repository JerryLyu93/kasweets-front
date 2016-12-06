// 引入模块
import example from './example'
// 引入组件
import hello from '../../views/hello'
export default [
  ...example,
  {
    path: '/',
    name: 'hello',
    component: hello
  }
]
