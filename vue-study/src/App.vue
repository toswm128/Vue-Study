<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view>
      <Todo />
      <Memo />
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
