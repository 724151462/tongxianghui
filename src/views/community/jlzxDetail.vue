<template>
  <div class="bg-gray">
    <div class="row bg-white pad-h-30 pad-t-30 ju-start">
      <img class="avatar" :src="topic.avatar" alt="">
      <div class="column mar-l-20">
        <div class="row" style="width: 280px">
          <span>{{topic.name}}</span>
          <div class="row" @click="comClick">
            <img width="20" :src="require('../../assets/images/pinglun.png')" alt="">
            <span>评论</span>
          </div>
        </div>
        <span class="p t-gray mar-t-10">2019-05-06</span>
      </div>
    </div>
      <div class="mar-b-10 column ju-start bg-white pad-h-30">
        <span class="pad-t-20 b">{{topic.topicTitle}}</span>
        <div v-for="(item, index) in topic.nodes" :key="'a'+index" style="flex-direction: row">
          <span v-if="item.type === 2">{{item.content}}</span>
        </div>
        <div class="row mar-b-20">
          <img v-for="(item, index) in tImages" :key="index" :src="item.content" style="width: 30%; margin-right: 5%" alt="">
        </div>
        <!-- <div class="row bg-white" style="width: 100%">
            <div style="width:50%" class="row ju-center mar-v-10">
              <img width="20" :src="require('../../assets/images/点赞.png')" alt="">
              <span class="mar-l-10">441</span>
            </div>
            <div style="width:50%" class="row ju-center mar-v-10">
              <img width="20" :src="require('../../assets/images/pinglun.png')" alt="">
              <span class="mar-l-10">554</span>
            </div>
          </div> -->
      </div>
      <div v-for="(item, index) in comments" :key="index">
        <div class="row pad-h-30 bg-white" @click="replyCom(item.commentId, item.replyId)">
          <div class="row bg-white pad-t-30 ju-start">
              <img class="avatar" :src="item.avatar" alt="">
              <div class="column mar-l-20">
                <span>{{item.nickName}}</span>
                <span class="p t-gray mar-t-10">{{item.sendTime}}</span>
              </div>
          </div>
          <div><img @click.stop="prize(item)" width="20" :src="item.likeStatus === 1 ? require('../../assets/images/已点赞.png') : require('../../assets/images/点赞.png')" alt=""><span class="mar-l-10">{{item.likeCount}}</span></div>
        </div>
        <div class="bg-white column pad-h-30">
          <span class="mar-v-30">{{item.content}}</span>
          <div class="triangle"></div>
          <div v-for="(reply, index) in item.commentReply" :key="index" class="column bg-gray w-690 pad-v-20" style="padding-left: 10px">
            <span @click="replyCom(reply.commentId, reply.replyId)"><span style="color: #4289FE">{{reply.replierNickname}} <span style="color: #000">回复</span> {{reply.targetUserNickname}}：</span>{{reply.content}}</span>
          </div>
        </div>
      </div>
      <div style="height: 55px;background: #fff"></div>
      <div class="fix-bottom bg-white pad-v-20 w-750" v-if="inputShow === true">
        <div class="row" v-if="newComment.images.length !== 0">
          <img class="mar-l-20 mar-b-10" v-for="(item, index) in newComment.images" width="30%" style="margin-right: 5%" :key="index" :src="item.imageUrl" alt="">
        </div>
        <div class="row w-690-fill">
          <input type="text" class="input" v-model="newComment.content" placeholder="写下你的看法吧！">
          <upOss @ossUp="getDocUrl">
            </upOss>
          <mt-button type="primary" size="small" @click="handleCom">发送</mt-button>
        </div>
      </div>
  </div>
</template>

<script>
import {topicDetail, topicCommentDetail, sendComment, repComment, prizeStatus} from '../../api/api'
import upOss from '../../components/tools/up-oss'
export default {
  data() {
    return{
      active: 'tab-container1',
      topicId: this.$route.query.id,
      topic: {},
      comments: [
      ],
      newComment: {
        images: []
      },
      tImages: [],
      inputShow: false,
      comType: '',
      replyId: '',
      commentId: ''
    }
  },
  created() {
    console.log(this.$route)
    this.getTopic()
    this.getComment()
  },
  methods:{
    comClick() {
      this.inputShow = true
      this.comType = 'comment'
    },
    handleTchange(tname) {
      this.active = tname
    },
    getTopic() {
      topicDetail(this.topicId).then(res => {
        this.tImages = res.data.nodes.filter(item => {
          return item.type === 3
        })
        this.topic = res.data
      })
    },
    getComment() {
      topicCommentDetail(this.topicId).then(res => {
        this.comments = res.data.pageData
      })
    },
    getDocUrl(params) {
      if(this.newComment.images.length>2){
        this.$toast('最多上传三张图片')
        return
      }else{
        this.newComment.images.push({imageUrl: params})
      }
    },
    prize(item) {
      prizeStatus(item.commentId).then(res => {
        this.getComment()
      })
    },
    handleCom() {
      console.log(this.comType)
      if (this.comType === 'reply') {
        let data = {
          commentId: this.commentId,
          content: this.newComment.content,
          replyId: this.replyId
        }
        repComment(data).then(res => {
          if(res.code === 200) {
            this.handleSuccess()
          }else{
            this.$toast(res.msg)
          }
        })
      }else {
        let data = {
          topicId: Number(this.topicId),
          content: this.newComment.content,
          images: this.newComment.images
        }
        sendComment(data).then(res => {
          if (res.code === 200) {
            this.$toast('评论成功！')
          }else{
            this.$toast(res.msg)
          }
          this.handleSuccess()
        })
      }
    },
    replyCom(comId, replyId) {
      console.log(replyId)
      this.replyId = replyId
      this.commentId = comId
      this.inputShow = true
      this.comType = 'reply'
    },
    handleSuccess() {
      this.newComment.content = '',
      this.newComment.images = []
      this.inputShow = false
      this.getComment()
    }
  },
  components: {
    upOss
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
      width 400px
      padding 20px 30px
      background #f2f2f2
</style>

