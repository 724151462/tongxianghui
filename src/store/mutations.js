const mutations = {
  setNavtitle(state, data) {
    state.navTitle = data
  },
  setActId(state, actId) {
    localStorage.setItem('actId', actId)
    state.actId = localStorage.getItem('actId')
  }
}
export default mutations