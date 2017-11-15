const getapp = new getApp();
// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: 'canvas',
    latitude: '',
    longitude: '',
    speed: '',
    accuracy: '',
  },

  Wxurl: function () {
    getapp.publicUrl();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://apis.map.qq.com/ws/geocoder/v1/?location=23.596072,113.575070&get_poi=1&key=LZFBZ-DLNWS-PK5OM-6XVIH-LK3OK-FRFCN',
      method: 'GET',
      success: function (res) {
        console.log(res.data.result.ad_info.location.lat);
        console.log(res.data.result.ad_info.location.lng);
        that.setData({
          latitude: res.data.result.ad_info.location.lat,
          longitude: res.data.result.ad_info.location.lng 
        });
      }
    })
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          latitudes: res.latitude,
          longitudes: res.longitude,
          speed: res.speed ,
          accuracy: res.accuracy
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})