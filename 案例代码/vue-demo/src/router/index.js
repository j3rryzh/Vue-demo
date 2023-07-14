import Vue from "vue";
import Router from "vue-router";
// import Home from "../pages/Home";
// import Search from "../pages/Search";
// import asyncCom from "../pages/asyncCom";

Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: "/",
//       name: "Home",
//       component: () => import("../pages/Home")
//     },
//     {
//       path: "/home",
//       name: "Home",
//       component: () => import("../pages/Home")
//     },
//     {
//       path: "/search",
//       name: "Search",
//       component: () => import("../pages/Search")
//     },
//     {
//       path: "/asyncCom",
//       name: "asyncCom",
//       component: () => import("../pages/asyncCom")
//     }
//   ]
// });

const routeOptions = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/home",
    name: "Home"
  },
  {
    path: "/search",
    name: "Search"
  },
  {
    path: "/asyncCom",
    name: "asyncCom"
  },
  {
    path: "/element_table",
    name: "element_table"
  },
  {
    path: "/gunter",
    name: "gunter"
  },
  {
    path: "/parallax",
    name: "parallax"
  },
  {
    path: "/animate",
    name: "animate"
  },
  {
    path: "/interlace",
    name: "interlace"
  }
];

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/pages/${route.name}.vue`)
  };
});

const router = new Router({
  routes
});

export default router;
