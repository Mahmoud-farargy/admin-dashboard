import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import appConfig from "../appConfig.json";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "",
      description: "Admin dashboard",
      requiresAuth: true
    },
    component: Home
  },
  {
    path: '/datatable/:type',
    name: 'Datatable',
    meta: {
      title: "Datatable",
      description: "Added users and products",
      requiresAuth: true
    },
    component: () => import('../views/DataTable.vue')
  },
  {
    path: '/blankpage/:pagename',
    name: 'BlankPage',
    meta: {
      title: "Blank Page",
      description: "This page needs to be completed",
      requiresAuth: true
    },
    component: () => import('../views/BlankPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function(to, _, savedPosition){
    if(to.hash){
      setTimeout(() => {
        const element = document.getElementById(to.hash.replace(/#/, ''))
        if (element && element.scrollIntoView) {
          element.scrollIntoView({block: 'center', behavior: 'smooth'});
        }
      }, 500);
        return {
          el: to.hash
        }
    }else{
      return savedPosition;
    }
  },
})

router.beforeEach((to, _, next) => {
  window.scrollTo({
    top:0,
    left:0,
    behavior: "auto"
  });
  document.title = `${(to.meta && to.meta.title) ? to.meta.title : appConfig.title} | ${appConfig.author}`;
  next();
});

export default router
