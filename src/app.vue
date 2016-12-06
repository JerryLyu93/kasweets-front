<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
<style type="text/css" lang="less">
@import "./assets/reset.css";
@import "./assets/common.less";
// 自定属性
#app {
  background-color: #f0f0f0;
}
</style>