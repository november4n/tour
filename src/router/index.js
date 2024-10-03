import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '../views/MainView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainView
  },
  {
    path: '/single/:id',
    component: ItemView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
