<template>
  <activeList :msgList="msgList" @getId="getId"></activeList>
</template>

<script>
import activeList from '@/components/active/message.vue'
import {getActList} from '@/api/api'
export default {
  data() {
    return{
      msgList: [],
    }
  },
  created() {
    this.$store.commit('setNavtitle', '活动列表')
    this.getActList()
  },
  components: {activeList},
  methods: {
    getId(data) {
      console.log(data)
      this.$router.push({path: '/active/index'})
    },
    getActList() {
      getActList().then(res => {
        this.msgList = res.data.pageData
      })
    }
  }
}
</script>

<style>

</style>
