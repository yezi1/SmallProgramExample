App({

  publicUrl: function () {
    wx.switchTab({
      url: '/pages/module/module'
    });
  },

  equipmentHeight: function () {
    var res = wx.getSystemInfoSync();
    var setHeight = res.windowHeight - 115;
    return setHeight;
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化');
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('小程序从后台进入前台了');
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('小程序从前台进入后台了');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序报错了：' + msg);
  },

  /**
   * 全局参数放置处
   */
  globalData: {
    title: '我是标题'
  },

  globalIp: function () {
    return 'http://169.254.124.145';
  }
})
