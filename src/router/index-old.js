import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/pages/Dashboard.vue'
import Login from '@/views/Login.vue'
//---Buyer Pages---//
import Buyers from '@/views/pages/buyer/Index.buyer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Dashboard },
    { path: '/login', name: 'login', component: Login },
    
    //---Buyer Route----//
    { path:'/buyers',name:'Manage Buyer', component:Buyers },
    
    // {
    //   path: '/worldcup',
    //   name: 'worldcup',
    //   component: () => import('../views/pages/WorldCup.vue')
    // },
  ]
})

export default router
