<template>
<div>
  <div class="w-750">
    <img style="width: 100%" :src="require('../../assets/images/zcbg.jpg')" alt="">
  </div>
  <div>
    <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="info.username"></mt-field>
    <mt-field label="性别" placeholder="请输入性别" v-model="info.sex"></mt-field>
    <mt-field label="家乡镇区" placeholder="输入家乡镇区" type="" v-model="homeTown"></mt-field>
    <mt-field label="家乡村组" placeholder="输入家乡村组" type="" v-model="cunzu"></mt-field> -->
    <mt-field label="手机号" placeholder="输入手机号" v-model="mobile">
      <mt-button type="success" size="small" @click="sendMsg">发送</mt-button>
    </mt-field>
    <mt-field label="验证码" placeholder="输入验证码" v-model="captcha"></mt-field>
    <!-- <mt-field label="紧急电话" placeholder="请输入数字" type="number" v-model="number"></mt-field>
    <mt-field label="工作地市" placeholder="输入工作地市"></mt-field> -->
  </div>
  <div class="row ju-center" style="margin-top: 30%">
    <mt-button class="zc-btn" @click="register">注册</mt-button>
  </div>
</div>
  
</template>

<script>
import {getYzm, register} from '@/api/api';
export default {
  data() {
    return{
      info:{
        username: '',
        sex: '',
        homeTown: '',
        cunzu: '',
        mobile: '',
        jjMobile: '',
        workCity: '',
        captcha: ''
      }
      
    }
  },
  methods: {
    sendMsg() {
      getYzm(this.mobile).then(res => {
        
      })
    },
    register() {
      let data = {"uuid": localStorage.getItem('uuid'),"mobile":this.mobile,"captcha":this.captcha}
      register(data).then(res => {
        if(res.msg === 'success') {
          this.$toast('注册成功~')
          localStorage.setItem('token', res.data.token)
          this.$router.replace({path: '/'})
        }else{
          
        }
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
  .zc-btn
    padding 20px 100px
    color #fff
    background-color orange
</style>

