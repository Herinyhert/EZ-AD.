import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import icon from '../node_modules/bo'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
