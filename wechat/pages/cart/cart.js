//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    cart: {
      priceCount: 318,
      goods: [{
        imgUrl: 'http://www.lucullus.com.hk/images/item/WONDERLANDQCTE.PNG',
        name: '百香果芒奶油蛋糕',
        size: '中',
        price: '180',
        count: 1
      }, {
        imgUrl: 'http://www.lucullus.com.hk/images/item/WONDERLANDQCTE.PNG',
        name: '百香果芒奶油蛋糕',
        size: '中',
        price: '180',
        count: 1
      }, {
        imgUrl: 'http://www.lucullus.com.hk/images/item/WONDERLANDQCTE.PNG',
        name: '百香果芒奶油蛋糕',
        size: '中',
        price: '180',
        count: 1
      }]
    }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  plusCount: function (e) {
    var count = this.data.cart.goods[e.currentTarget.dataset.index].count
    var key = `cart.goods[${e.currentTarget.dataset.index}].count`
    var data = {}
    data[key] = count + 1
    this.setData(data)
  },
  subCount: function (e) {
    let that = this
    let index = e.currentTarget.dataset.index
    let count = that.data.cart.goods[index].count

    let data = {}
    if (count - 1 <= 0) {
      wx.showModal({
        title: '删除商品',
        content: '确认从购物车删除该商品吗?',
        success: function () {
          data['cart.goods'] = [{
            imgUrl: 'http://www.lucullus.com.hk/images/item/WONDERLANDQCTE.PNG',
            name: '百香果芒奶油蛋糕',
            size: '中',
            price: '180',
            count: 1
          }]
        }
      })
    } else {
      var key = `cart.goods[${e.currentTarget.dataset.index}].count`
      data[key] = count - 1
    }
    this.setData(data)
  }
})
