import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/dashboard'
  },
  {
    path: '/dashboard',
    component: () => import('views/dashboard'),
  },
  {
    path: '/category',
    component: () => import('views/category')
  },
  {
    path: '/article',
    component: () => import('views/article'),
  },
  {
    path: '/product',
    component: () => import('views/product')
  },
  {
    path: '/block',
    component: () => import('views/block'),
  },
  {
    path: '/links',
    component: () => import('views/links'),
  },
  {
    path: '/contact',
    component: () => import('views/contact')
  },
  {
    path: '/webset',
    component: () => import('views/webset')
  },
  {
    path: '/user',
    component: () => import('views/permission/user'),
  },
  {
    path: '/role',
    component: () => import('views/permission/role'),
  },
  {
    path: '/market',
    component: () => import('views/service/market')
  },
  {
    path: '/myservice',
    component: () => import('views/service/myservice'),
  },
  {
    path: '/worklist',
    component: () => import('views/work/worklist')
  },
  {
    path: '/faq',
    component: () => import('views/work/faq')
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})


//解决点击当前页面链接报错问题
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
