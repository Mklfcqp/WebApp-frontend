import { createRouter, createWebHistory } from 'vue-router'
import LoginPageENG from '@/views/LoginPageENG.vue'
import RegisterPageENG from '@/views/RegisterPageENG.vue'
import ResetPasswordPageENG from '@/views/ResetPasswordPageENG.vue'
import LoginPageCZ from '@/views/LoginPageCZ.vue'
import RegisterPageCZ from '@/views/RegisterPageCZ.vue'
import ResetPasswordPageCZ from '@/views/ResetPasswordPageCZ.vue'
import WatchlistENG from '@/views/WatchlistENG.vue'
import PortfolioENG from '@/views/PortfolioENG.vue'
import MenuENG from '@/views/MenuENG.vue'
import CvENG from '@/views/CvENG.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),


  routes: [
    { path: '/', redirect: '/loginENG' },
    { path: '/loginENG', component: LoginPageENG },
    { path: '/registerENG', component: RegisterPageENG },
    { path: '/resetPasswordENG', component: ResetPasswordPageENG },
    { path: '/loginCZ', component: LoginPageCZ },
    { path: '/registerCZ', component: RegisterPageCZ },
    { path: '/resetPasswordCZ', component: ResetPasswordPageCZ },
    { path: '/watchlistENG', component: WatchlistENG, meta: { requiresAuth: true } },
    { path: '/portfolioENG', component: PortfolioENG, meta: { requiresAuth: true } },
    { path: '/menuENG', component: MenuENG, meta: { requiresAuth: true } },
    { path: '/cvENG', component: CvENG, meta: { requiresAuth: true } },
  
  ]
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('accessToken');
  
  if (to.matched.some(record => record.meta.requiresAuth) && !accessToken) {
  
    next({ path: '/loginENG' });
  } else {
  
    next();
  }
});


export default router
