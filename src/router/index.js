import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServeView from '@/views/ServeView.vue'
import TeamView from '@/views/TeamView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ContactView from '@/views/ContactView.vue'
import JointView from '@/views/JointView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/serve',
    name: 'serve',
    component: ServeView
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/joint',
    name: 'joint',
    component: JointView
  },
  {
    path: '/profile/:cat/:name',
    name: 'profile',
    component: ProfileView
  }
  // example
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: AboutView,
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
