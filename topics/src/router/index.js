import { createRouter, createWebHistory } from "vue-router";
import OneDay from "../views/OneDay.vue";

const routes = [
  {
    path: "/",
    name: "OneDay",
    component: OneDay,
  },
  {
    path: "/threedays",
    name: "ThreeDays",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ThreeDays" */ "../views/ThreeDays.vue"),
  },
  {
    path: "/sevendays",
    name: "SevenDays",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "SevenDays" */ "../views/SevenDays.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
