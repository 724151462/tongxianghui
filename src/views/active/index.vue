<template>
  <div :style="bg" class="bg row ju-center">
    <div class="column al-center" style="margin-top: 100px">
      <img :src="btn.sign" alt="" @click="wxScan">
      <img class="mar-t-30" :src="btn.ans" alt="">
      <span class="mar-t-30">中奖记录</span>
    </div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: '', // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名
    jsApiList: [] // 必填，需要使用的JS接口列表
});
export default {
  data() {
    return {
      bg: {
        backgroundImage: `url(${require('../../assets/images/act_bg.jpg')}`
      },
      btn: {
        sign: require('../../assets/images/sign_btn.png'),
        ans: require('../../assets/images/ans_btn.png')
      }
    }
    
  },
  methods:{
    wxScan() {
      wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        }
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
.bg
  width: 100%;
  height: 100%;
  position: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
.column>img
  height 100px
.m-top
  position relative
  top 50px
</style>

