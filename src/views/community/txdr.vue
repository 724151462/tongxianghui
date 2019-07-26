<template>
  <div class="bg">
    <div class="parent">
      <div class="child column al-center ju-center" v-for="(item, index) in drList" :key="index" @click="toDrym(item.peopleId)">
        <img class="avatar" style="height: 80px;width: 80px" :src="item.avatar || ''" alt="">
        <img :src="require('../../assets/images/huangguan.png')" width="25" class="huangguan" alt="">
        <span style="margin-top: -20px">{{item.peopleName}}</span>
        <mt-button size="small" class="check mar-t-20">查 看</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import {getDrlist} from '../../api/api'
export default {
  data() {
    return{
      drList: []
    }
  },
  mounted() {
    this.$store.commit('setNavtitle', '达人列表')
    this.getDrlist()
  },
  methods: {
    getDrlist() {
      getDrlist().then(res => {
        this.drList = res.data.pageData
      })
    },
    toDrym(id) {
      this.$router.push({name: 'drym',params: {btnShow: false, id }})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bg
    background #FFF1E7
    min-height 1255px
  .parent 
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
  .child
    box-sizing: border-box;
    background-color: white;
    flex: 0 0 44%;
    height: 350px;
    margin-left 4%
    margin-top 30px
  .check
    border 1px solid orange
    background #fff
    color orange
    border-radius 50px
    padding 0 50px
  .huangguan
    position relative
    top -50px
    left 60px
</style>

