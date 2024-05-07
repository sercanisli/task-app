import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/add',
    name: 'AddProject',
    component: () => import('../views/AddProject.vue')
  },
  {
    path: '/project/:id',
    name: 'EditProject',
    component: () => import('../views/EditProject.vue'),
    props:true
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
