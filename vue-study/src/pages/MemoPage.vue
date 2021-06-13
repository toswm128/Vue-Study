<template>
  <div>
    <Header />
    <Memo :id="id" />
  </div>
</template>

<script>
import Memo from "../components/Memo.vue";
import Header from "../components/Header.vue";
export default {
  props: { id: Number },
  components: { Memo, Header },
};
</script>
