<template>
  <div class="body-gray">
    <div class="bg" :style="bg">
      <div class="user column mar-l-30">
        <span style="font-size: 30px">中奖记录</span>
        <span>凭本页到现场领奖</span>
        <div class="row bg-white w-690 mar-t-20 radius-10" style="box-shadow: 1px 1px 5px #ababab">
          <div class="row pad-h-30 mar-v-30">
            <img class="avatar" :src="require('../../assets/images/act_int.jpg')" width="30" alt="">
            <div class="column mar-l-20">
              <span>{{myInfo.userName}}</span>
              <span>{{myInfo.phoneNumber}}</span>
            </div>
          </div>
          <div class="column pad-h-30 mar-v-30 al-center">
            <span>{{zzList.length}}</span>
            <span class="p t-gray">中奖次数</span>
          </div>
          
        </div>
      </div>
    </div>
    <div class="his-record bg-gray radius-10" style="text-align: start">
      <div class="pad-v-10" style="border-bottom: 1px solid #f2f2f2">
        <span class="mar-l-20 t-gray pad-h-10">历史中奖记录</span>
      </div>

      <div class="pad-h-10" v-if="zzList.length !== 0">
        <div v-for="(item, index) in zzList" :key="index">
          <div class="row item bg-white">
            <div class="column">
              <span>{{item.interactionName}}<span class="mar-l-20 p pad-h-10" style="background: #FF7233; color: #fff">{{item.prizeType}}</span></span>
              <span class="mar-t-10">{{item.createTime}}</span>
            </div>
            <span>{{item.prizeName}}</span>
          </div>
        </div>
      </div>
      <div style="text-align: center;height: 100px; margin-top:100px" v-else>
        <span>暂无消息</span>
      </div>
    </div>
  </div>
</template>

<script>
import {getWinRecord, selfInfo} from '../../api/api'
export default {
  data() {
    return{
      bg: {backgroundImage: `url(${require('../../assets/images/zzjlbg.jpg')}`},
      zzList: [],
      myInfo: {}
    }
  },
  created() {
    this.$store.commit('setNavtitle', '中奖纪录')
    this.getWinRecord()
    this.getSelfInfo()
  },
  methods: {
    getWinRecord() {
      getWinRecord().then(res => {
        this.zzList = res.data
      })
    },
    getSelfInfo() {
      selfInfo().then(res => {
        this.myInfo = res.data
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.body-gray
  width: 100%;
  height: 100%;
  background-color #f2f2f2;
  // position: fixed;
  .bg
    width: 100%;
    height: 400px;
    // position: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  .user
    position relative
    top 180px
    color #fff
    .bg-white
      color #000
  .his-record
    position relative
    top 120px
    .item
      padding: 15px 15px;width: 90%;margin:0 auto;border-bottom: 1px solid #f2f2f2
</style>

