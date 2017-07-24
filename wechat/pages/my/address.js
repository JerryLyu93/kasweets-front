//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    addressList: [{
      name: '吕荣城',
      tel: 15805903740,
      address: '北京市海淀区辉煌国际五号楼1509'
    }, {
      name: '铁甲老头',
      tel: 15906054028,
      address: '北京市昌平区龙兴园中区七号楼三单元502'
    }],
    userInfo: {}
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      userInfo.credit = 100
      userInfo.phone = 15805903740
      console.log(userInfo)
      
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
