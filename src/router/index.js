import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/pages/Dashboard.vue'
//---Buyer Pages---//
import Buyers from '@/views/pages/buyer/Index.buyer.vue'
import CreateBuyer from '@/views/pages/buyer/Create.buyer.vue'
import EditBuyer from '@/views/pages/buyer/Edit.buyer.vue'
import DeleteBuyer from '@/views/pages/buyer/Delete.buyer.vue'
import ShowBuyer from '@/views/pages/buyer/Show.buyer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Dashboard },
    
    //---Buyer Route----//
    { path:'/buyers',name:'Manage Buyer', component:Buyers },
    { path:'/buyers/create', name:'Create Buyer', component:CreateBuyer },
    { path:'/buyers/edit/:id', name:'Edit Buyer', component:EditBuyer },
    { path:'/buyers/delete/:id', name:'Delete Buyer', component:DeleteBuyer },
    { path:'/buyers/show/:id', name:'Show Buyer', component:ShowBuyer },
    
    // {
    //   path: '/worldcup',
    //   name: 'worldcup',
    //   component: () => import('../views/pages/WorldCup.vue')
    // },
  ]
})

export default router
