import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { getToken } from "@/utils/auth";

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
    path: "/post/create",
    name: "Create Post",
    component: () => import("@/views/post/Create"),
    meta: { title: "Create Post", requireAuth: true }
  },
  {
    path: "/users/:username",
    name: "Users",
    component: () => import("@/views/user/Profile"),
    meta: { title: "User Profile" }
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

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(error => error);
};

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach(async (to, from, next) => {
  const token = getToken();

  if (token) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      await store.dispatch("user/getInfo");
      next();
    }
  } else {
    next();
  }
});

export default router;
