import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/pages/Dashboard.vue'
import Login from '@/views/Login.vue'
import Buyers from '@/views/pages/buyer/Index.buyer.vue'
import { Cookie } from '@/utils/cookie.js'

import Purchases from '@/views/pages/purchase/Index.purchase.vue'
import CreatePurchases from '@/views/pages/purchase/Create.purchase.vue'
import EditPurchases from '@/views/pages/purchase/Edit.purchase.vue'
import ViewPurchases from '@/views/pages/purchase/Show.purchase.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login'},
    { path: '/dashboard', name: 'home', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/login', name: 'login', component: Login },
    { path:'/buyers', name:'Manage Buyer', component: Buyers, meta: { requiresAuth: true } },

    { path:'/purchases', name:'Manage Purchase', component: Purchases, meta: { requiresAuth: true } },
    { path:'/purchases/create', name:'Create Purchase', component: CreatePurchases, meta: { requiresAuth: true } },
    { path:'/purchases/Edit', name:'Edit Purchase', component: EditPurchases, meta: { requiresAuth: true } },
    { path:'/purchases/View', name:'View Purchase', component: ViewPurchases, meta: { requiresAuth: true } },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = Cookie.getCookie('token');
  if (to.name === 'login' && isAuthenticated) {
    next('/dashboard');
  } else if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router

