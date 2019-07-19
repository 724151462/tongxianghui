import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)
console.log(mutations)

export default new Vuex.Store({
  state: {
    navTitle: '',
    actId: localStorage.getItem('actId') || ''
  },
  mutations,
  actions: {

  }
})
