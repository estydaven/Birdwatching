import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/autorize',
    name: 'Autorize',
    meta: { layout: 'empty' },
    component: () => import('../views/Autorize.vue')
  },
  {
    path: '/sign',
    name: 'Sign',
    meta: { layout: 'empty' },
    component: () => import('../views/Sign.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
