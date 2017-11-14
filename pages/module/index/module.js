Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewState: false,
    formState: false,
    navState: false,
    basicsState: false,
    mediaState: false,
    mapState: false,
    canvasState: false,
    animationData: {}
  },

  /**
   * 视图容器
   */
  viewDropDown: function () {
    this.viewState = !this.viewState;
    this.setData({
      viewState: this.viewState
    });
  },

  viewPage: function () {
    wx.navigateTo({
      url: '../viewContainer/view/view'
    });
  },

  scrollViewPage: function () {
    wx.navigateTo({
      url: '../viewContainer/srcoll-view/srcoll-view'
    });
  },

  swiperPage: function () {
    wx.navigateTo({
      url: '../viewContainer/swiper/swiper'
    });
  },

  /**
   * 表单组件
   */
  formDropDown: function () {
    this.formState = !this.formState;
    this.setData({
      formState: this.formState
    });
  },

  buttonPage: function () {console.log('8');
    wx.navigateTo({
      url: '../form/button/button'
    });
  },

  checkPage: function () {
    console.log('9');
    wx.navigateTo({
      url: '../form/checkbox/checkbox'
    });
  },

  formPage: function () {
    wx.navigateTo({
      url: '../form/form/form'
    });
  },

  inputPage: function () {
    wx.navigateTo({
      url: '../form/input/input'
    });
  },

  labelPage: function () {
    wx.navigateTo({
      url: '../form/label/label'
    });
  },

  pickerPage: function () {
    wx.navigateTo({
      url: '../form/picker/picker'
    });
  },

  radioPage: function () {
    wx.navigateTo({
      url: '../form/radio/radio'
    });
  },

  sliderPage: function () {
    wx.navigateTo({
      url: '../form/slider/slider'
    });
  },

  switchPage: function () {
    wx.navigateTo({
      url: '../form/switch/switch'
    });
  },

  textareaPage: function () {
    wx.navigateTo({
      url: '../form/textarea/textarea'
    });
  },

  checkboxPage: function () {
    wx.navigateTo({
      url: '../form/button/button'
    });
  },

  /**
   * 基础内容
   */
  basicsdropDown: function () {

    this.basicsState = !this.basicsState;

    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation;

    if (this.basicsState) {
      this.animation.height(340 + 'rpx').step();
    } else {
      animation.height(100 + 'rpx').step();
    }

    this.setData({
      animationData: animation.export(),
      basicsState: this.basicsState
    });
  },

  textPage: function () {
    wx.navigateTo({
      url: '../basics/text/text'
    });
  },

  iconPage: function () {
    wx.navigateTo({
      url: '../basics/icon/icon'
    });
  },

  progressPage: function () {
    wx.navigateTo({
      url: '../basics/progress/progress'
    });
  },

  /**
   * 导航
   */
  navDropDown: function () {
    this.navState = !this.navState;
    this.setData({
      navState: this.navState
    });
  },

  navigatorPage: function () {
    wx.navigateTo({
      url: '../nav/navigator/navigator'
    });
  },

  /**
   * 媒体组件
   */
  mediaDropDown: function () {
    this.mediaState = !this.mediaState;
    this.setData({
      mediaState: this.mediaState
    });
  },

  imagePage: function () {
    wx.navigateTo({
      url: '../media/image/image'
    });
  },

  audioPage: function () {
    wx.navigateTo({
      url: '../media/audio/audio'
    });
  },

  videoPage: function () {
    wx.navigateTo({
      url: '../media/video/video'
    });
  },

  /**
   * 地图
   */
  mapDropDown: function () {
    this.mapState = !this.mapState;
    this.setData({
      mapState: this.mapState
    });
  },

  mapPage: function () {
    wx.navigateTo({
      url: '../map/map'
    });
  },

  /**
   * 画布
   */
  canvasDropDown: function () {
    this.canvasState = !this.canvasState;
    this.setData({
      canvasState: this.canvasState
    });
  },

  canvasPage: function () {
    wx.navigateTo({
      url: '../canvas/canvas'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },


})