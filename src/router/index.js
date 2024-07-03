import { createRouter, createWebHashHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const ServeView = () => import('@/views/ServeView.vue')
const TeamView = () => import('@/views/TeamView.vue')
const ProfileView = () => import('@/views/ProfileView.vue')
const ContactView = () => import('@/views/ContactView.vue')
const JointView = () => import('@/views/JointView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '智勝法律事務所' }
  },
  {
    path: '/serve',
    name: 'serve',
    component: ServeView,
    meta: { title: '服務項目' }
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView,
    meta: { title: '律師團隊' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: '聯絡我們' }
  },
  {
    path: '/joint',
    name: 'joint',
    component: JointView,
    meta: { title: '合署資訊' }
  },
  {
    path: '/profile/:cat/:name',
    name: 'profile',
    component: ProfileView,
    meta: { title: '律師資訊' }
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
router.beforeEach((to, from, next) => {
  const defaultTitle = '智勝法律事務所'
  let title = to.meta.title || defaultTitle

  if (to.params.name && to.params.cat) {
    title += `-${to.params.cat} / ${to.params.name}`
  }
  document.title = title
  next()
})
export default router
