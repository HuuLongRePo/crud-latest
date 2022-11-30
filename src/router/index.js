import { createRouter, createWebHistory } from 'vue-router'
import ProductManager from '@/components/ProductManager.vue'



const routes = [

    {
        path: '/',
        name: 'ProductManager',
        component: ProductManager,
        meta: {
            layout: 'User'
          }
    },

]

const router = createRouter({ history: createWebHistory(), routes })

export default router