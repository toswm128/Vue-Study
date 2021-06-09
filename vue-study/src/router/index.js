import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../components/Todo.vue";
import Memo from "../components/Memo.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Todo,
    },
    {
      path: "/memo",
      component: Memo,
      props: route => ({ id: route.query.id }),
    },
  ],
});

export default router;
