<template>
<div>
  <div class="w-750">
    <img style="width: 100%" :src="require('../../assets/images/zcbg.jpg')" alt="">
  </div>
  <div class="w-690-fill">
    <mt-field label="用户名：" placeholder="请输入用户名" v-model="info.userName"></mt-field>
    <mt-field label="性别：" placeholder="请输入姓名" v-model="info.gender"></mt-field>
    <mt-field label="家乡镇区：" placeholder="请输入家乡镇区" v-model="info.addressTown"></mt-field>
    <mt-field label="家乡村组：" placeholder="请输入家乡村组" v-model="info.addressVillage"></mt-field>
    <mt-field label="手机号：" placeholder="请输入手机号" disabled="disabled" v-model="info.phoneNumber"></mt-field>
    <mt-field label="紧急电话：" placeholder="请输入紧急电话" v-model="info.emergencyContactNumber"></mt-field>
    <mt-field label="工作地市：" placeholder="请输入工作地市" v-model="info.workplaceCity"></mt-field>
  </div>

  <div class="column al-center" style="margin-top: 30%;">
    <mt-button class="zc-btn" @click="saveInfo">保存</mt-button>
  </div>
</div>
  
</template>

<script>
import {selfInfo,saveInfo} from '../../api/api'
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
    saveInfo() {
      saveInfo(this.info).then(res => {
        if(res.code === 200) {
          this.$toast('信息修改成功')
          this.getInfo()
        }else{
          this.$toast(res.msg)
        }
      })
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

