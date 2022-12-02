/* eslint-disable */
import Home from "./pages/home.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/spa-info",
    component: () => import("./pages/spa-info.vue"),
  },
];
