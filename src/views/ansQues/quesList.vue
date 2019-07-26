<template>
  <div>
    <div class="bg" :style="bg">
      <div class="quesNum" :style="countbg">
        <span class="numtext">{{this.currentIndex+1}}/{{this.subjInfo.length}}</span>
      </div>

      <div class="main-container">
        <!-- 题目 -->
        <img class="kh-top" :src="require('../../assets/images/khtop.png')" width="30px" alt />
        <div class="subject">
          <span>{{subjInfo[currentIndex].subjectName}}</span>
        </div>
        <img class="kh-bottom" :src="require('../../assets/images/khbottom.png')" width="30px" alt />
        <!-- 选项 -->
        <div class="ans-container" v-for="(item, index) in subjInfo[currentIndex].options" :key="index" @click="chooseAns(subjInfo[currentIndex].options, item, index)">
          <img width="30" class="imgpos" :src="chooseImgs[index]" alt />
          <div class="ans-item row">
            <span>{{item.optionName}}</span>
            <img
              v-if="item.checked === true"
              height="25"
              style="margin-right: 15px"
              :src="require('../../assets/images/choosed.png')"
              alt
            />
            <img
              v-else
              height="25"
              style="margin-right: 15px"
              :src="require('../../assets/images/nchoose.png')"
              alt
            />
          </div>
        </div>
      </div>
      <div class="navigate row">
        <template v-if="currentIndex !== 0">
          <button @click="last">上一题</button>
        </template>
        <template v-else>
          <button disabled>上一题</button>
        </template>
        <template v-if="currentIndex !== subjInfo.length-1">
          <button @click="next">下一题</button>
        </template>
        <template v-else>
          <button @click="finish" :disabled="hasSubmit">提交</button>
        </template>
        
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="modal" v-if="infoWindow">
      <div class="window">
        <img :src="require('../../assets/images/close.jpg')" width="20px" alt="" @click="infoWindow = false">
        <div class="ans-info column al-center">
          <span class="mar-t-10">恭喜你！答对<span style="color:#FE6806"><b>8</b></span>题</span>
          <span class="mar-t-10"><b>获得抽奖资格，请等待开奖</b></span>
          <img style="margin-top: 5%" width="70%" :src="require('../../assets/images/dt_over.png')" alt="">
        </div>
        <div class="zd-status">
          <b>查看作答情况</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import {getSubject, postAns} from '../../api/api'
export default {
  data() {
    return {
      bg: {
        backgroundImage: `url(${require("../../assets/images/dtbj.jpg")}`
      },
      countbg: {
        backgroundImage: `url(${require("../../assets/images/dts.png")}`
      },
      chooseImgs: [
        require("../../assets/images/a.png"),
        require("../../assets/images/b.png"),
        require("../../assets/images/c.png"),
        require("../../assets/images/d.png")
      ],
      currentIndex: 0,
      subjInfo: [
        {
          subjectName: '',
          options: []
        }
      ],
      ansRes:[],
      infoWindow: false,
      hasSubmit: false,
      actId: this.$store.state.actId
    };
  },
  created() {
    this.getSubject(this.actId)
  },
  methods: {
    finish() {
      this.addOption()
      console.log(this.currentIndex)
      if(this.ansRes.length !== this.currentIndex+1){
        this.noAnsToast()
        return
      }else{
        postAns({interactionId: this.actId, ans: this.ansRes})
        console.log(this.ansRes)
      }
      this.infoWindow = true
      // 提交过后按钮失效
      this.hasSubmit = true
    },
    last() {
      // if(this.ansRes.length === this.currentIndex+1) {
      //   Toast('您已作答完毕')
      // }else{
        this.currentIndex --
      // }
    },
    next() {
      this.addOption()
      console.log(this.currentIndex)
      let curAns = this.subjInfo[this.currentIndex].options.find(item => {
        console.log(item.checked)
        return item.checked === true
      })
      console.log('curAns', curAns)
      if(curAns !== undefined){
        this.currentIndex ++
      }else{
        this.noAnsToast()
      }
    },
    addOption() {
      let options = []
      this.subjInfo[this.currentIndex].options.forEach(element => {
        if(element.checked === true)
        options.push(element.optionId)
      });
      this.ansRes[this.currentIndex] = {options, subjectId: this.subjInfo[this.currentIndex].subjectId}
    },
    chooseAns(ansList, item, index) {
      let subType = this.subjInfo[this.currentIndex].multipleSubject
      // ansList.forEach(element => {
      //   element.checked = false
      // });
      item.checked = !item.checked
    },
    noAnsToast() {
      Toast('请先作答~')
    },
    getSubject(activeId) {
      getSubject(activeId).then(res => {
        res.data.forEach(element => {
          element.options.forEach(item => {
            this.$set(item, 'checked', false)
          })
        });
        this.subjInfo = res.data
      })
    }
  },
};
</script>

<style lang="stylus" scoped>
.bg {
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 100%;
  position: fixed;
}

.quesNum {
  background-size: 100% 100%;
  height: 60px;
  width: 300px;
  position: absolute;
  top: 6%;
  left: 230px;
}

.numtext {
  position: relative;
  top: 10px;
  font-family: FZHZ;
}

.main-container {
  position: absolute;
  top: 250px;
  left: 150px;
  width: 440px;
}

.kh-top {
  position: relative;
  top: 0;
  left: -200px;
}

.kh-bottom {
  position: relative;
  top: -30px;
  right: -220px;
}

.subject {
  position: relative;
  top: -20px;
  left: 20px;
  text-indent: 50px;
  text-align: start;
  line-height: 40px;
  letter-spacing: 5px;
}

.subject>span {
  font-family: FZHZ;
  color: #fff;
}

.ans-container {
  position: relative;
  left: 20px;
  width: 420px;
  text-align: start;
}

.ans-item {
  height: 70px;
  line-height: 70px;
  background-color: #ffffff;
  padding-left: 30px;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: -5px -5px 5px #999 inset;
}

.imgpos {
  position: relative;
  top: 30px;
  left: -25px;
}

.navigate {
  position: relative;
  top: 88%;
  width: 340px;
  margin: 0 auto;
}

.navigate > button {
  height: 60px;
  width: 150px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #88BAFF;
  box-shadow: -5px -5px 5px #6D9DE6 inset;
}

.modal {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.window {
  position relative
  top 230px
  background-color #fff
  height 45%
  width 76%
  margin 0 auto
  border-radius 20px
}
.window> img 
  margin-top 15px
  margin-left 15px
  float left  

.ans-info
  position relative
  top 60px
  left -20px
  margin 0 auto
  height 80%
.zd-status
  position relative
  background: linear-gradient(to bottom right, #FE6806 , #FFAB00);
  color #fff
  margin 0 auto
  width 60%
  height 60px
  border-radius 30px
  line-height 60px
</style>

