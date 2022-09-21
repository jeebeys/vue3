import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/login",
  //   name: "login",
  //   component: login,
  //   meta: {
  //     title: "登录-叠翠山",
  //     layout: "DefaultLayout"
  //   }
  // },
  // {
  //   path: "/index",
  //   name: "index",
  //   component: () => index,
  //   meta: {
  //     title: "首页-叠翠山",
  //     layout: "BackendLayout"
  //   }
  // },
  {
    path: "/",
    name: "index",
    component: () => import("../views/index.vue"),
    meta: {
      title: "首页",
      layout: "BackendLayout"
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/about.vue"),
    meta: {
      title: "关于",
      layout: "BackendLayout"
    }
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

// router.beforeEach(async (to, from, next) => {
//   // @ts-ignore
//   window.document.title = to.meta.title
//   next()
// })
export default router;
