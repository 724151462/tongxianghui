<template>
  <div :style="bg" class="bg row ju-center">
    <div class="column al-center" style="margin-top: 100px">
      <!-- <img :src="btn.sign" alt="" @click="wxScan"> -->
      <img :src="btn.sign" alt="" @click="wxScan">
      <img class="mar-t-30" :src="btn.ans" alt="">
      <span class="mar-t-30">中奖记录</span>
    </div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import {wxSign} from '../../api/api'
export default {
  data() {
    return {
      bg: {
        backgroundImage: `url(${require('../../assets/images/act_bg.jpg')}`
      },
      btn: {
        sign: require('../../assets/images/sign_btn.png'),
        ans: require('../../assets/images/ans_btn.png')
      },
      config: {}
    }
    
  },
  created() {
    this.getSign()
  },
  methods:{
    signTip() {
      this.$toast('请使用微信扫一扫功能签到~')
    },
    getSign() {
      wxSign({url: location.href}).then(res => {
        let data = JSON.parse(res.data)
        this.config = JSON.parse(res.data)
        console.log(data)
        wx.config({
          debug: true,
          appId: 'wx914c713e23caac49',
          timestamp: data.timestamp,
          nonceStr: data.noncestr,
          signature: data.signature,
          jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
        })
      })
    },
    wxScan() {
      console.log(12345)
      
      wx.ready(function () {
  // config信息验证成功后会执行ready方法,所有接口调用都必须在config接口获得结果之后
  // config 是一个客户端的异步操作,所以如果需要在页面加载时调用相关接口,则须把相关接口放在ready函数中调用来确保正确执行.对于用户触发是才调用的接口,则可以直接调用,不需要放在ready函数中
  wx.checkJsApi({ // 判断当前客户端版本是否支持指定JS接口
    jsApiList: [
      'scanQRCode'
    ],
    success: function (res) { // 以键值对的形式返回，可用true，不可用false。如：{"checkResult":{"scanQRCode":true},"errMsg":"checkJsApi:ok"}
      if (res.checkResult.scanQRCode === true) {
        console.log('扫码功能可用')
         wx.scanQRCode({ // 微信扫一扫接口
           desc: 'scanQRCode desc',
           needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
           scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
           success: function (res) {
             const getCode = res.resultStr // 当needResult 为 1 时，扫码返回的结果
         }
      })
    } else {
       alert('抱歉，当前客户端版本不支持扫一扫')
      }
    },
    fail: function (res) { // 检测getNetworkType该功能失败时处理
      alert('fail' + res)
    }
  })
})

 /* 处理失败验证 */
wx.error(function (res) {
// config 信息验证失败会执行error函数,如签名过期导致验证失败,具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
   alert('配置验证失败: ' + res.errMsg)
})
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

