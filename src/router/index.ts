import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login_page.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main_page.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
