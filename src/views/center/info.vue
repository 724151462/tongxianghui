<template>
<div>
  <div class="w-750">
    <img style="width: 100%" :src="require('../../assets/images/zcbg.jpg')" alt="">
  </div>
  <div class="w-690-fill">
    <div class="row mar-v-30">
      <span>用户名：</span>
      <span>{{info.userName}}</span>
    </div>
    <div class="row mar-v-30">
      <span>性别：</span>
      <span>{{info.gender}}</span>
    </div>
    <div class="row mar-v-30">
      <span>家乡镇区：</span>
      <span>{{info.addressTown}}</span>
    </div>
    <div class="row mar-v-30">
      <span>家乡村组：</span>
      <span>{{info.addressVillage}}</span>
    </div>
    <div class="row mar-v-30">
      <span>手机号：</span>
      <span>{{info.phoneNumber}}</span>
    </div>
    <div class="row mar-v-30">
      <span>紧急电话：</span>
      <span>{{info.emergencyContactNumber}}</span>
    </div>
    <div class="row mar-v-30">
      <span>工作地市：</span>
      <span>{{info.workplaceCity}}</span>
    </div>
  </div>

  <div class="column al-center" style="margin-top: 40%;">
    <mt-button class="zc-btn" @click="toSetinfo">设置我的信息</mt-button>
    <mt-button class="zc-btn mar-t-20" @click="toZb">装扮达人界面</mt-button>
  </div>
</div>
  
</template>

<script>
import {selfInfo} from '../../api/api'
export default {
  data() {
    return{
      info:{
        userName: '啊啊啊',
        gender: '男',
        addressTown: '集美区',
        addressVillage: '杏林',
        phoneNumber: '13111111111',
        emergencyContactNumber: '13111111111',
        workplaceCity: '天擎'
      }
      
    }
  },
  created() {
    this.$store.commit('setNavtitle', '个人中心')
    this.getInfo()
  },
  methods: {
    getInfo() {
      selfInfo().then(res => {
        this.info = res.data
      })
    },
    toZb() {
      this.$router.push({path: '/center/zbdr'})
    },
    toSetinfo() {
      this.$router.push({path: '/center/setinfo'})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .zc-btn
    padding 20px 100px
    color #fff
    background-color orange
</style>

