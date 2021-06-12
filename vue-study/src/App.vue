<template>
  <div id="app">
    <router-view>
      <Main />
      <Write />
      <Memo />
    </router-view>
  </div>
</template>

<script>
import Write from "./components/Write.vue";
import Memo from "./components/Memo.vue";

import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
    Write,
    Memo,
  },
};
</script>

<style></style>
