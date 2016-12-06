<template>
  <div class="ks-hello">
    <img src="../assets/cake.png"/>
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      title: 'KaSweets',
      content: '做最他妈好吃的蛋糕'
    }
  }
}
</script>
<style lang="less">
@import "../assets/common.less";

.ks-hello {
  margin-top: 100px;
  text-align: center;
  img {
    width: 50%;
    border-radius: 50%;
  }
  h1 {
    margin-top: 20px;
    font-size: 20px;
    color: @color1;
  }
  p {
    margin-top: 20px;
    font-size: 14px;
    color: @color2;
  }
}
</style>
