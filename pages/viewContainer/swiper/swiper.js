const getapp = new getApp();
// pages/viewContainer/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: 'swiper',
    dot: false,
    toggle: false,
    cohesion: false,
    direction: false,
    automatic: 2000,
    animation: 1000
  },

  Wxurl: function () {
    getapp.publicUrl();
  },

  indicatorDots: function () {
    this.data.dot = !this.data.dot;
    this.setData({
      dot: this.data.dot
    });
  },

  autoplay: function () {
    this.data.toggle = !this.data.toggle;
    this.setData({
      toggle: this.data.toggle
    });
  },

  circular: function () {
    this.data.cohesion = !this.data.cohesion;
    this.setData({
      cohesion: this.data.cohesion
    });
  },

  vertical: function () {
    this.data.direction = !this.data.direction;
    this.setData({
      direction: this.data.direction
    });
  },

  toggleValue: function (event) {
    this.data.automatic = event.detail.value;
    this.setData({
      automatic: this.data.automatic
    });
  },

  spacingValue: function (event) {
    this.data.animation = event.detail.value;
    this.setData({
      animation: this.data.animation
    });    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let getHeight = getapp.equipmentHeight();
    this.setData({
      getHeight: getHeight
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