<template>
  <div class="dr-bg" :style="bg">
    <div class="main-info column">
      <span style="font-size: 30px">{{info.peopleName}}</span>
      <span>{{info.peopleBirthday}}/{{info.peopleOccupation}}</span>
    </div>
    <div class="photo-con">
      <div class="column pad-v-30 pad-l-30">
        <span class="pad-b-20">相册</span>
        <div class="row">
          <img :src="require('../../assets/images/dr_imgl.jpg')" width="150" style="border-radius: 5px" alt="">
          <div class="column mar-l-30 ju-be" style="height: 150px">
            <div class="row">
              <img width="60" :src="require('../../assets/images/dr_imgr.jpg')" alt="">
              <img width="60" class="mar-l-30" :src="require('../../assets/images/dr_imgr.jpg')" alt="">
            </div>
            <div class="row">
              <img width="60" :src="require('../../assets/images/dr_imgr.jpg')" alt="">
              <img width="60" class="mar-l-30" :src="require('../../assets/images/dr_imgr.jpg')" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="row ju-start mar-l-30">
        <span style="width: 120px" :class="['pad-b-10', tab==='tab1'? 'tab' : '']" @click="tabChange('tab1')">简介</span>
        <span style="width: 120px" :class="['pad-b-10','mar-l-30', tab==='tab2'? 'tab' : '']" @click="tabChange('tab2')">小视频</span>
      </div>
      <div v-if="tab==='tab1'" class="column w-690-fill" style="text-align: start">
        <!-- <span class="mar-t-20"></span> -->
        <span class="mar-t-20">
          {{info.desc}}
        </span>
      </div>
      <div v-else class="column w-690-fill" style="text-align: start">
        <span class="mar-t-20">暂不支持小视频</span>
      </div>
    </div>
    <div v-if="btnShow === true" class="fix-bottom w-690-fill" style="bottom: 20px;color: #fff">
      <span class="pub-btn">重新装扮</span>
    </div>
  </div>
</template>

<script>
import {peopleDetail} from '../../api/api'
export default {
  data() {
    return{
      bg: {
        background: `url(${require('../../assets/images/dr_bg.jpg')})`,
        'background-repeat': 'no-repeat',
        'background-size': '100%'
      },
      tab: 'tab1',
      info: {}
    }
  },
  props: ['btnShow', 'id'],
  created() {
    console.log(this.$route)
    this.getDetail()
  },
  methods: {
    tabChange(tab) {
      this.tab = tab
    },
    getDetail() {
      peopleDetail(this.id).then(res => {
        this.info = res.data
        this.bg.background = `url(${res.data.avatar})`
      })
    }
  },
}
</script>

<style lang="stylus">
  .dr-bg
    height 540px
    width 100%
    position absolute
  .main-info
    position relative
    color #fff
    width 80%
    top 400px
    left 35px
  .photo-con
    position absolute
    top 525px
    background #fff
    width 100%
    border-top-left-radius 20px
    border-top-right-radius 20px
  .tab
    color #0395A3
    width 100px
    border-bottom 5px solid #0395A3
  .pub-btn
    height 50px
    line-height 50px
    padding 30px 300px
    background-color orange
    margin-left -30px
    border-radius 100px
</style>

