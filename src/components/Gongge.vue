<template>
  <ul class="row wrap ju-start" style="padding: 0">
    <router-link class="child column al-center ju-center" v-for="(item, index) in menuList" :key="index" tag="li" :to="{path: item.path}">
      <div>
        <img class="img-size" :src="item.img" alt="">
      </div>
      <span>
        {{item.name}}
      </span>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      value: []
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  flex-flow: row wrap
  align-content: flex-start
  margin-top -7px
.child
  box-sizing: border-box
  flex: 0 0 33.33%
  height: 200px
  border: 0.5px solid #ededed
.child>span
  margin-top 15px
  font-size 20px
.wrap>:last-child
  border-right: 1px solid #ededed
// .wrap :nth-child(4),.wrap :nth-child(5),.wrap :nth-child(6)
//   border-top none
//   border-bottom none

.img-size
  height:80px
</style>

