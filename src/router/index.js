import Vue from 'vue'
import VueRouter from 'vue-router'
import OtherView from '../views/OtherView.vue'
import opt1 from '../components/OPT1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'opt1',
    component: opt1
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/other',
    name:'other',
    component: OtherView
  }
]

const router = new VueRouter({
  routes
})

export default router
