import Vue from 'vue'
import router from './router'
import store from './store'
import less from 'less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import MainInterface from './MainInterface.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Buefy);
Vue.use(less);


new Vue({
  router,
  store,
  el: '#main',
  render: h => h(MainInterface)
}).$mount('#main')
