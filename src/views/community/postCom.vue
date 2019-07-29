<template>
  <div class="bg-gray" style="position: fixed;min-height:100%">
    <div class="w-690-fill" style="color: #cecece">
      <mt-field class="mar-t-20 radius-10" placeholder="编辑标题" v-model="topic.title"></mt-field>
      <mt-field class="mar-t-20 radius-10" rows="10" type="textarea" placeholder="请输入正文内容..." v-model="topic.content"></mt-field>
      <div class="">
        <div class="column addImg mar-l-30">
          <div class="row">
            <upOss :plus="true" @ossUp="getDocUrl">
            </upOss>
            <div class="row" v-if="topic.images.length !== 0">
              <img class="mar-l-20" v-for="(item, index) in topic.images" width="50" :key="index" :src="item" alt="">
            </div>
          </div>
            
          <span class="mar-t-20">最多可添加3张图片</span>
        </div>
      </div>
      <div class="fix-bottom w-690-fill" style="bottom: 20px;color: #fff">
        <span class="pub-btn" @click="createTopic">发布</span>
      </div>
    </div>
    
  </div>
  

</template>

<script>
import upOss from '../../components/tools/up-oss'
import {createTopic} from '../../api/api'
export default {
  data() {
    return{
      topic: {
        images: []
      }
    }
  },
  methods: {
    createTopic() {
      console.log(this.topic)
      let {content, images, title} = this.topic
      let data = {
        content,
        imageUrls: images,
        topicTitle: title
      }
      createTopic(data).then(res => {
        if(res.code === 200) {
          this.$toast('发布成功！')
        }else{
          this.$toast(res.msg)
        }
      })
    },
    getDocUrl(params) {
      console.log(this.topic.images.length)
      if(this.topic.images.length>2){
        this.$toast('最多上传三张图片')
        return
      }else{
        this.topic.images.push(params)
      }
    }
  },
  components:{
    upOss
  }
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

