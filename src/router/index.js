import { createRouter, createWebHistory } from 'vue-router'
import SearchToolbar from '../components/SearchToolbar.vue'
import SearchBarV2 from '../components/SearchBarV2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SearchToolbar
  },
  {
    path: '/searchbarv2',
    name: 'SearchBarV2',
    component: SearchBarV2
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
