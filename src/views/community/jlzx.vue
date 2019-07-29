<template>
  <div class="bg-gray">
    <section class="bor-b bg-white">
      <div class="row mar-l-30 mar-t-20 p" style="width: 120px">
        <span :class="['pad-b-20', active === 'tab-container1' ? 'active' : '']" @click="handleTchange('tab-container1')">全部</span>
        <span :class="['pad-b-20', active === 'tab-container2' ? 'active' : '']" @click="handleTchange('tab-container2')">我发起的</span>
      </div>
    </section>
    <mt-tab-container v-model="active" :swipeable='true'>
    <mt-tab-container-item id="tab-container1">
      <div v-for="(item, index) in topList" :key="index" class="mar-b-10 column ju-start bg-white pad-h-30" @click="detail(item.topicId)">
        <div class="row mar-t-10">
          <img class="avatar" :src="item.avatar" alt="">
          <div class="column mar-l-10">
            <span class="pad-b-20 b">{{item.topicTitle}}</span>
            <span class="t-gray p">{{item.subDate}}</span>
          </div>
        </div>
        <p class="content t-gray">{{item.description}}</p>
        <div class="row ju-start" v-if="item.topicImages.length !== 0">
          <img v-for="(img, index) in item.topicImages" :key="index" :src="img" style="width: 30%;margin-right: 5%" alt="">
        </div>
        <div class="row bg-white" style="width: 100%">
          <div style="width:50%" class="row ju-center mar-v-10">
            <img width="20" :src="require('../../assets/images/eye.png')" alt="">
            <span class="mar-l-10">{{item.viewCount}}</span>
          </div>
          <div style="width:50%" class="row ju-center mar-v-10">
            <img width="20" :src="require('../../assets/images/pinglun.png')" alt="">
            <span class="mar-l-10">{{item.commentCount}}</span>
          </div>
        </div>
      </div>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container2">
      <div v-for="(item, index) in topList" :key="index" class="mar-b-10 column ju-start bg-white pad-h-30" @click="detail(item.topicId)">
        <div class="row mar-t-10">
          <img class="avatar" :src="item.avatar" alt="">
          <div class="column mar-l-10">
            <span class="pad-b-20 b">{{item.topicTitle}}</span>
            <span class="t-gray p">{{item.subDate}}</span>
          </div>
        </div>
        <p class="content t-gray">{{item.description}}</p>
        <div class="row ju-start" v-if="item.topicImages.length !== 0">
          <img v-for="(img, index) in item.topicImages" :key="index" :src="img" style="width: 30%;margin-right: 5%" alt="">
        </div>
        <div class="row bg-white" style="width: 100%">
          <div style="width:50%" class="row ju-center mar-v-10">
            <img width="20" :src="require('../../assets/images/dianzan1.png')" alt="">
            <span class="mar-l-10">441</span>
          </div>
          <div style="width:50%" class="row ju-center mar-v-10">
            <img width="20" :src="require('../../assets/images/pinglun.png')" alt="">
            <span class="mar-l-10">554</span>
          </div>
        </div>
      </div>
    </mt-tab-container-item>
  </mt-tab-container>
  <div class="addTiezi column al-center" style="color: #fff" @click="addTz">
    <img width="30" :src="require('../../assets/images/photo.png')" alt="">
    <span style="font-size:14px">发布</span>
  </div>
  </div>
</template>

<script>
import {topicList, myTop} from '../../api/api'
export default {
  data() {
    return{
      active: 'tab-container1',
      topList: []
    }
  },
  created() {
    this.getList()
  },
  methods:{
    getList() {
      topicList().then(res => {
        this.topList = res.data.pageData
      })
    },
    getMyTop() {
      myTop().then(res => {
        this.topList = res.data.pageData
      })
    },
    handleTchange(tname) {
      this.active = tname
      if(tname === 'tab-container1') {
        this.getList()
      }else{
        this.getMyTop()
      }
      
    },
    detail(id) {
      console.log(id)
      this.$router.push({path: '/com/detail', query:{id}})
    },
    addTz() {
      this.$router.push({path: '/com/postcom'})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .active
    color orange
    border-bottom 5px solid orange
  .content
    text-align start
    text-indent 50px
  .addTiezi
    position fixed
    top 86% 
    left 82% 
    height 100px
    width 100px
    border-radius 50px
    background-color orange
</style>

