import { createRouter, createWebHistory } from 'vue-router'
import SearchToolbar from '../components/SearchToolbar.vue'
import SearchBarV2 from '../components/SearchBarV2.vue'
import SearchToolbarV3 from '../components/SearchToolbarV3.vue'

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
  },
  {
    path: '/toolbarv3',
    name: 'SearchToolbarV3',
    component: SearchToolbarV3
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
