<template>
  <div>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="info.username"></mt-field>
    <mt-field label="出身年份" placeholder="请输入出身年份" v-model="info.year"></mt-field>
    <mt-field label="行业/职业" placeholder="请输入行业/职业" v-model="info.job"></mt-field>
    <mt-field label="公司所在" placeholder="输入所在公司" type="" v-model="info.company"></mt-field>
    <div class="mar-l-30">
      <div class="column addImg mar-l-30">
        <span class="plus">+</span>
        <span class="mar-t-20">添加封面</span>
      </div>
      <div class="column addImg mar-l-30">
        <span class="plus">+</span>
        <span class="mar-t-20">添加相册</span>
      </div>
    </div>
    <div class="fix-bottom w-690-fill" style="bottom: 20px;color: #fff">
        <span class="pub-btn">保存</span>
      </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return{
      info:{
        username: '',
        year: '',
        job: '',
        company: '',
        post: '',
        photo: ''
      }
      
    }
  }
}
</script>

<style lang="stylus" scoped>
  .addImg
      position: relative; 
      font-size 30px
  .plus
    height 100px
    width 100px
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
</style>

