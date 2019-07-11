import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/my-mint.styl';
import './assets/css/public.styl';
import './assets/font/index.styl'
Vue.use(MintUI)
import {Toast} from 'mint-ui'
Vue.prototype.$toast = Toast;

Vue.config.productionTip = false

const Globe_VM = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default Globe_VM
