import { createRouter, createWebHistory } from 'vue-router'
import task_main from '../views/task_main.vue'
import log_main from '../views/log_main.vue'
import set_main from '../views/set_main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task_main',
      component: task_main
    },
    {
      path: '/log',
      name: 'log',
      component: log_main
    },
    {
      path: '/set',
      name: 'set',
      component: set_main
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
