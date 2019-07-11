<template>
<div>
<mt-header :title="title">
  <router-link to="" slot="left">
    <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
  <div id="app">
    <router-view/>
  </div>
</div>
  
</template>
<script>
export default {
  created() {
    this.$store.commit('setNavtitle', '同乡会')
  },
  computed:{
    title() {
      console.log(this.$store.state)
      return this.$store.state.navTitle
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
