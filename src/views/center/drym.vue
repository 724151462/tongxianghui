<template>
  <div class="dr-bg" :style="bg">
    <div class="main-info column">
      <span style="font-size: 30px">同乡小姐姐</span>
      <span>1985年3月/演员</span>
    </div>
    <div class="photo-con">
      <div class="column pad-v-30 pad-l-30">
        <span class="pad-b-20">相册</span>
        <div class="row">
          <img :src="require('../../assets/images/dr_imgl.jpg')" width="180" style="border-radius: 5px" alt="">
          <div class="column mar-l-30 ju-be" style="height: 180px">
            <div class="row">
              <img width="80" :src="require('../../assets/images/dr_imgr.jpg')" alt="">
              <img width="80" class="mar-l-30" :src="require('../../assets/images/dr_imgr.jpg')" alt="">
            </div>
            <div class="row">
              <img width="80" :src="require('../../assets/images/dr_imgr.jpg')" alt="">
              <img width="80" class="mar-l-30" :src="require('../../assets/images/dr_imgr.jpg')" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="row ju-start mar-l-30">
        <span style="width: 120px" :class="['pad-b-10', tab==='tab1'? 'tab' : '']" @click="tabChange('tab1')">简介</span>
        <span style="width: 120px" :class="['pad-b-10','mar-l-30', tab==='tab2'? 'tab' : '']" @click="tabChange('tab2')">小视频</span>
      </div>
      <div v-if="tab==='tab1'" class="column w-690-fill" style="text-align: start">
        <span class="mar-t-20">同乡小姐姐</span>
        <span class="mar-t-20">
          简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
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
export default {
  data() {
    return{
      bg: {
        background: `url(${require('../../assets/images/dr_bg.jpg')})`,
        'background-repeat': 'no-repeat',
        'background-size': '100%'
      },
      tab: 'tab1'
    }
  },
  props: ['btnShow'],
  created() {
    console.log(this.$route)
  },
  methods: {
    tabChange(tab) {
      this.tab = tab
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
    top 412px
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

