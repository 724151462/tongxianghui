<template>
  <div class="bg-gray" style="height: 100vh">
    <div class="con-center t-gray">
      <mt-field class="mar-t-20 radius-10" label="用户名" placeholder="请输入用户名" v-model="info.peopleName"></mt-field>
      <mt-field class="mar-t-20 radius-10" label="出身年份" placeholder="请输入出身年份" v-model="info.peopleBirthday"></mt-field>
      <mt-field class="mar-t-20 radius-10" label="行业/职业" placeholder="请输入行业/职业" v-model="info.peopleOccupation"></mt-field>
      <mt-field class="mar-t-20 radius-10" label="公司所在" placeholder="输入所在公司" type="" v-model="info.desc"></mt-field>
    </div>
    <div class="con-center t-gray">
      <div class="column ju-start addImg mar-t-20">
        <div class="out-padding column">
          <div class="plus row ju-center">
            <upOss :plus="true" @ossUp="getDocUrl">
            </upOss>
          </div>
          <span class="mar-t-20">添加封面</span>
        </div>
      </div>
      <div class="column ju-start addImg mar-t-20">
        <div class="out-padding column">
          <div class="plus row ju-center">
            <img width="50" :src="require('../../assets/images/plus.jpg')" alt="">
          </div>
          <span class="mar-t-20">添加相册</span>
        </div>
      </div>
    </div>
    <div class="fix-bottom w-690-fill" style="bottom: 20px;color: #fff">
        <span class="pub-btn" @click="saveDrinfo">保存</span>
      </div>
  </div>
  
</template>

<script>
import upOss from "../../components/tools/up-oss";
import {saveDr} from '../../api/api'
export default {
  data() {
    return{
      info:{
        peopleName: '',
        peopleBirthday: '',
        peopleOccupation: '',
        avatar: '',
        desc: '',
        resourceList: []
      }
      
    }
  },
  methods:{
    saveDrinfo() {
      saveDr(this.info).then(res => {
        if(res.code === 200) {
          this.$toast('保存成功')
        }else{
          this.$toast(res.msg)
        }
      })
    },
    getDocUrl(...params) {
      console.log(params)
    }
  },
  components: {upOss}
}
</script>

<style lang="stylus" scoped>
  .mint-cell-wrapper
    height 200px
  .addImg
    position: relative; 
    font-size 30px
  .plus
    height 200px
    width 200px
    line-height 100px
    font-size: 40px
    border-radius 10px
    border: 3px solid #cecece
  .pub-btn
    height 50px
    line-height 50px
    padding 30px 300px
    background-color orange
    margin-left -30px
    border-radius 100px
  .con-center
    width calc(100%-(10px*2))
    margin 0 auto
  .out-padding
    padding 20px
    background-color #fff
    width calc(100%-(20px*2))
    border-radius 10px
</style>

