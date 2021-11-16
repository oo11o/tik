import { createRouter, createWebHistory } from 'vue-router'
import News from '../components/News.vue'
import User from "../components/User.vue";

const routes = [
  {
    path: '/',
    name: 'News',
    component: News
  },
  {
    path: '/user/:id?',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
