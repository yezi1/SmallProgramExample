const getapp = new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 下拉公共方法
   */

  publicDropDown: function (event) {
    var index = event.currentTarget.dataset.index;
    var datas = this.data.datas;
    datas[index].state = !datas[index].state;
    this.setData({
      datas: datas
    });
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let that = this;
    /**
     * 公共数据
     */
    wx.request({
      url: getapp.globalIp() + '/SmallProgramExample/data/data.json',
      data: {},
      header: {
        "Content-Type": "json"
      },
      method: "GET",
      dataType: "json",
      success: function (res) {
        let datas = res.data.data;
        that.setData({
          datas: datas
        });
      },
      fail: function (error) {
        console.log(error.errMsg);
      },
      complete: function () {
        console.log('数据调用结束');
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

  },


})