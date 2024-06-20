import Vue from 'vue'
// import app from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import MainInterface from './MainInterface.vue'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(MainInterface)
}).$mount('#main')
