import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"
import AppLayout from "../Layout/AppLayout.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: AppLayout
    }
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      layout: AppLayout
    }
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      layout: AppLayout
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
