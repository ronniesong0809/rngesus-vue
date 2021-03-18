import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/auth/Signup"),
    meta: { title: "Signup" }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/Login"),
    meta: { title: "Login" }
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404"),
    meta: { title: "404-Notfound" }
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
