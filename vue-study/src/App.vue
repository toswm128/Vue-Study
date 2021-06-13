<template>
  <div id="app">
    <router-view>
      <MainPage />
      <WritePage />
      <MemoPage />
    </router-view>
  </div>
</template>

<script>
import WritePage from "./pages/WritePage.vue";
import MemoPage from "./pages/MemoPage.vue";
import MainPage from "./pages/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
    WritePage,
    MemoPage,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
