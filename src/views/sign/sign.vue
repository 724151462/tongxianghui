<template>
  <div class="w-690-fill column al-center" style="margin-top: 30%">
    <img width="300" :src="require('../../assets/images/sign_success.png')" alt="">
    <span class="mar-t-30 p">记得参加互动，赢得更多抽奖机会哦！</span>
    <button class="mar-t-20 fl-btn" @click="toActlist">查看更多福利</button>
  </div>
</template>

<script>
export default {
  methods: {
    toActlist() {
      this.$router.push({path: '/active/list'})
    }
  },
}
</script>

<style lang="stylus" scoped>
  .fl-btn
    background rgb(229,75,73)
    border none 
    color #ffffff
    padding 10px 100px
    height 50px
    border-radius 10px
</style>

