<template>
<div>
  <div class="w-750">
    <img style="width: 100%" :src="require('../../assets/images/zcbg.jpg')" alt="">
  </div>
  <div class="w-690-fill">
    <div class="row mar-v-30">
      <span>用户名：</span>
      <span>{{info.username}}</span>
    </div>
    <div class="row mar-v-30">
      <span>性别：</span>
      <span>{{info.sex}}</span>
    </div>
    <div class="row mar-v-30">
      <span>家乡镇区：</span>
      <span>{{info.homeTown}}</span>
    </div>
    <div class="row mar-v-30">
      <span>家乡村组：</span>
      <span>{{info.cunzu}}</span>
    </div>
    <div class="row mar-v-30">
      <span>手机号：</span>
      <span>{{info.mobile}}</span>
    </div>
    <div class="row mar-v-30">
      <span>紧急电话：</span>
      <span>{{info.jjMobile}}</span>
    </div>
    <div class="row mar-v-30">
      <span>工作地市：</span>
      <span>{{info.workCity}}</span>
    </div>
  </div>

  <div class="row ju-center" style="margin-top: 50%">
    <mt-button class="zc-btn">装扮达人界面</mt-button>
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return{
      info:{
        username: '啊啊啊',
        sex: '男',
        homeTown: '集美区',
        cunzu: '杏林',
        mobile: '13111111111',
        jjMobile: '13111111111',
        workCity: '天擎'
      }
      
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

