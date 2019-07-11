<template>
  <div class="bg-gray">
    <div class="row bg-white pad-h-30 pad-t-30 ju-start">
      <img class="avatar" src="https://org.modao.cc/uploads4/images/3625/36255319/v2_ptmsgo.jpg" alt="">
      <div class="column mar-l-20">
        <span>同乡小姐姐</span>
        <span class="p t-gray mar-t-10">2019-05-06</span>
      </div>
    </div>
      <div class="mar-b-10 column ju-start bg-white pad-h-30">
        <span class="pad-t-20 b">标题同乡之间。、、、、、</span>
        <p class="content t-gray">互助而自由组件的非盈利互助而自由组件的非盈利、、、、、、、、、。。。。。。。。。。。。</p>
        <img src="https://org.modao.cc/uploads3/images/2240/22402260/raw_1530869899.png" width="300" alt="">
        <div class="row bg-white" style="width: 100%">
          <div style="width:50%" class="row ju-center mar-v-10">
            <img width="30" :src="require('../../assets/images/点赞.png')" alt="">
            <span class="mar-l-10">441</span>
          </div>
          <div style="width:50%" class="row ju-center mar-v-10">
            <img width="30" :src="require('../../assets/images/pinglun.png')" alt="">
            <span class="mar-l-10">554</span>
          </div>
        </div>
      </div>
      <div class="row pad-h-30 bg-white">
        <div class="row bg-white pad-t-30 ju-start">
            <img class="avatar" src="https://org.modao.cc/uploads4/images/3625/36255319/v2_ptmsgo.jpg" alt="">
            <div class="column mar-l-20">
              <span>蒲娜娜</span>
              <span class="p t-gray mar-t-10">2019-05-06</span>
            </div>
        </div>
        <img width="30" :src="require('../../assets/images/点赞.png')" alt="">
      </div>
      <div class="bg-white column pad-h-30">
        <span class="mar-v-30">嘻嘻嘻嘻嘻嘻嘻嘻</span>
        <div class="triangle"></div>
        <div class="column bg-gray w-690 pad-v-20" style="padding-left: 10px">
          <span><span style="color: #4289FE">小樱：</span>嘻嘻嘻嘻嘻嘻嘻嘻</span>
          <span><span style="color: #4289FE">大咖：</span>嘻嘻嘻嘻嘻嘻嘻嘻嘻</span>
        </div>
      </div>
      <div style="height: 55px"></div>
      <div class="fix-bottom bg-white pad-v-20 w-750">
        <div class="row w-690-fill">
          <input type="text" class="input" placeholder="写下你的看法吧！">
          <mt-button type="primary" size="small">发送</mt-button>
        </div>
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
  .triangle{
    // position relative
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom: 20px solid #f2f2f2;
    margin-left 20px
    }
    .input
      border none 
      border-radius 50px
      width 450px
      padding 20px 30px
      background #f2f2f2
</style>

