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
      <div class="mar-b-10 column ju-start bg-white pad-h-30" @click="detail">
        <span class="pad-t-20 b">标题同乡之间。、、、、、</span>
        <p class="content t-gray">互助而自由组件的非盈利互助而自由组件的非盈利、、、、、、、、、。。。。。。。。。。。。</p>
        <img src="https://org.modao.cc/uploads3/images/2240/22402260/raw_1530869899.png" width="300" alt="">
        <div class="row bg-white" style="width: 100%">
          <div style="width:50%" class="row ju-center mar-v-10">
            <img width="30" :src="require('../../assets/images/dianzan1.png')" alt="">
            <span class="mar-l-10">441</span>
          </div>
          <div style="width:50%" class="row ju-center mar-v-10">
            <img width="30" :src="require('../../assets/images/pinglun.png')" alt="">
            <span class="mar-l-10">554</span>
          </div>
        </div>
      </div>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container2">
      <div class="mar-b-10 column ju-start bg-white pad-h-30">
        <span class="pad-t-20 b">我发起的标题同乡之间。、、、、、</span>
        <p class="content t-gray">互助而自由组件的非盈利互助而自由组件的非盈利、、、、、、、、、。。。。。。。。。。。。</p>
        <img src="https://org.modao.cc/uploads3/images/2240/22402260/raw_1530869899.png" width="300" alt="">
        <div class="row bg-white" style="width: 100%">
          <div style="width:50%" class="row ju-center mar-v-10">
            <img width="30" :src="require('../../assets/images/dianzan1.png')" alt="">
            <span class="mar-l-10">441</span>
          </div>
          <div style="width:50%" class="row ju-center mar-v-10">
            <img width="30" :src="require('../../assets/images/pinglun.png')" alt="">
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
export default {
  data() {
    return{
      active: 'tab-container1'
    }
  },
  methods:{
    handleTchange(tname) {
      this.active = tname
    },
    detail() {
      this.$router.push({path: '/com/detail'})
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

