import Vue from "vue";
import VueRouter from "vue-router";
import Write from "../components/Write.vue";
import Memo from "../components/Memo.vue";
import Main from "../components/Main.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/write",
      component: Write,
    },
    {
      path: "/memo",
      component: Memo,
      props: route => ({ id: route.query.id }),
    },
  ],
});

export default router;
