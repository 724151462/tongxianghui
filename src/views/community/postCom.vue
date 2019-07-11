<template>
  <div class="bg-gray" style="position: fixed;min-height:100%">
    <div class="w-690-fill" style="color: #cecece">
      <mt-field class="mar-t-20 radius-10" placeholder="编辑标题" v-model="username"></mt-field>
      <mt-field class="mar-t-20 radius-10" rows="10" type="textarea" placeholder="请输入正文内容..." v-model="username"></mt-field>
      <div class="">
        <div class="column addImg mar-l-30">
          <span class="plus">+</span>
          <span class="mar-t-20">最多可添加3张图片</span>
        </div>
      </div>
      <div class="fix-bottom w-690-fill" style="bottom: 20px;color: #fff">
        <span class="pub-btn">发布</span>
      </div>
    </div>
    
  </div>
  

</template>

<script>
// import { Field } from 'mint-ui';
export default {
  
}
</script>

<style lang="stylus" scoped>
  .tarea
    height 300px
  .addImg
    position: relative; 
    top:-180px
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

