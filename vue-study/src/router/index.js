import Vue from "vue";
import VueRouter from "vue-router";
import WritePage from "../pages/WritePage.vue";
import MemoPage from "../pages/MemoPage.vue";
import MainPage from "../pages/MainPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/write",
      component: WritePage,
    },
    {
      path: "/memo",
      component: MemoPage,
      props: route => ({ id: route.query.id }),
    },
  ],
});

export default router;
