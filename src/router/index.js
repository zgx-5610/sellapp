import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
        {
            path:'/goods',
            name:'goods',
            component :() => import('../views/Goods.vue')
        },
        {
            path:'/evaluate',
            name:'evaluate',
            component :() => import('../views/Evaluate.vue')
        },
        {
            path:'/business',
            name:'business',
            component :() => import('../views/Business.vue')
        },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
