import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/LesFruit',
    name: 'lesfruit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "lesfruit" */ '../views/LesFruitView.vue')
  },
  {
    path: '/fruit',
    name: 'fruit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "fruit" */ '../views/FruitView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  { 
    path: '/page-404', 
    name:"page404",
    component: () => import(/* webpackChunkName: "page404" */ '../views/404View.vue')
  },  
  {
    path: '/AValider',
    name: 'avalider',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "avalider" */ '../views/ValidFruitView.vue')
  },{
    path: '/DemandeFruit',
    name: 'demandefruit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "demandefruit" */ '../views/DemandeFruitView.vue')
  },{
    path: '/enregistrer',
    name: 'enregistrer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "enregistrer" */ '../views/enregistrerView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name:"redirection",
    redirect: '/page-404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || "localhost"),
  routes
})

export default router
