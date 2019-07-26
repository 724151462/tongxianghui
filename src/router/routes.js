import Home from '../views/Home.vue'
let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/active/index',
    name: 'active',
    component: () => import(/* webpackChunkName: "active" */ '../views/active/index.vue')
  },
  {
    path: '/active/list',
    name: 'actList',
    component: () => import(/* webpackChunkName: "actList" */ '../views/active/actList.vue')
  },
  {
    path: '/ques/list',
    name: 'quesList',
    component: () => import(/* webpackChunkName: "quesList" */ '../views/ansQues/quesList.vue')
  },
  {
    path: '/sign/success',
    name: 'signSuccess',
    component: () => import(/* webpackChunkName: "quesList" */ '../views/sign/sign.vue')
  },
  {
    path: '/active/zzjl',
    name: 'zzjl',
    component: () => import(/* webpackChunkName: "zzjl" */ '../views/active/zzRecord.vue')
  },
  {
    path: '/com/index',
    name: 'jlzx',
    component: () => import(/* webpackChunkName: "jlzx" */ '../views/community/jlzx.vue')
  },
  {
    path: '/com/postcom',
    name: 'postcom',
    component: () => import(/* webpackChunkName: "postcom" */ '../views/community/postCom.vue')
  },
  {
    path: '/com/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "jlzxDetail" */ '../views/community/jlzxDetail.vue')
  },
  {
    path: '/com/txdr',
    name: 'txdr',
    component: () => import(/* webpackChunkName: "txdr" */ '../views/community/txdr.vue')
  },
  {
    path: '/center/zhuce',
    name: 'zhuce',
    component: () => import(/* webpackChunkName: "zhuce" */ '../views/center/register.vue')
  },
  {
    path: '/center/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "info" */ '../views/center/info.vue')
  },
  {
    path: '/center/setinfo',
    name: 'setinfo',
    component: () => import(/* webpackChunkName: "setInfo" */ '../views/center/setInfo.vue')
  },
  {
    path: '/center/zbdr',
    name: 'zbdr',
    component: () => import(/* webpackChunkName: "zbdr" */ '../views/center/saveDr.vue')
  },
  {
    path: '/center/drym',
    name: 'drym',
    props:  (route) => ({
      btnShow: route.params.btnShow,
      id: route.params.id
    }),
    component: () => import(/* webpackChunkName: "drym" */ '../views/center/drym.vue')
  }
]
export default routes