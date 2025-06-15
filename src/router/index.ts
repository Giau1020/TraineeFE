import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/components/pages/LoginPage.vue'),
      meta: { guestOnly: true },
    },
    // {
    //   path: '/',
    //   component: () => import('@/components/pages/HomePage.vue'),
    //   meta: { requiresAuth: true },
    // },
  ],
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isLoggedIn)
    return { path: '/login', query: { redirect: to.fullPath } }

  if (to.meta.guestOnly && auth.isLoggedIn) return { path: '/' }
})

export default router
