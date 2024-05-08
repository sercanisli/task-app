import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import { projectAuth } from '../firebase/config';

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({name:'welcome'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/add',
    name: 'AddProject',
    component: () => import('../views/AddProject.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/project/:id',
    name: 'EditProject',
    component: () => import('../views/EditProject.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
