<template>
  <div id="app">
    <router-view>
      <Todo />
      <Memo text="i'am text" />
    </router-view>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import Memo from "./components/Memo.vue";

export default {
  name: "App",
  components: {
    Todo,
    Memo,
  },
};
</script>

<style></style>
