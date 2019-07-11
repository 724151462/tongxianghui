<template>
  <div class="bg-gray radius mheight">
    <!-- <div v-if="msgList.length === 0" class="column mar-t-30" style="align-items: center">
      <noContent></noContent>
    </div>
    <div v-else> -->
      <div class="column w-690-fill" v-for="(msg, index) in msgList" :key="index" @click="getId(msg)">
        <div class="msg-container">
          <div class="mar-t-20 mar-l-30">
            <div :class="[msg.timeStatus === 1 ? 'ing' : (msg.timeStatus === 2 ? 'nostart' : 'over'),'status-point', 'mar-r-10']"></div>
            <span class="t-dgray">{{msg.timeStatus === 1 ? '进行中' : (msg.timeStatus === 2 ? '未开始' : '已结束')}}</span>
          </div>
          <div class="row al-start">
            <div class="mar-l-30 mar-t-30">
              <img :src="msg.img" height="50px" alt="">
            </div>
            <div class="column content-container">
              <span class="msg-title">{{msg.interactionName}}</span>
              <div class="msg-container" style="width:240px">
                <span class="t-gray">{{msg.startTime}}</span>
                <span class="t-gray">{{msg.interactionLoc}}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
export default {
  props: {
    msgList: {
      type: Array,
      value: []
    }
  },

  mounted() {
    console.log(234);
  },

  methods: {
    getId(msg) {
      this.$emit("getId", msg);
    }
  }
};
</script>

<style lang="stylus" scoped>

.radius
  border-radius 5px
.status-point
  display inline-block
  height 20px;
  width 20px;
  border-radius 50%
.over
  background-color red
.ing
  background-color green
.nostart
  background-color yellow
.time {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  height: 40px;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  margin: 0 auto;
  padding: 0 10px;
  margin-top: 30px;
}

.mheight
  min-height 1334px

.msg-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 690px;
  background: #fff;
  margin-top: 20px;
}

.title-container {
  margin-left: 30px;
  width: 90%;
}

.content-container {
  margin: 30px;
}

.msg-title {
  font-size: 32px;
  font-weight: bold;
}

.msg-content {
  margin-top: 20px;
  color: #ababab;
  font-size: 30px;
}
</style>

