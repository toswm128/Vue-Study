<template>
  <div class="main">
    <ul v-for="item in this.memos" :key="item.id">
      <router-link class="list" :to="{ path: 'memo', query: { id: item.id } }">
        {{ item.title }}
      </router-link>
      <button v-on:click="del" :id="item.id">삭제</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Main",

  data() {
    return {
      memos: [],
    };
  },
  methods: {
    del: function(e) {
      var id = e.target.id;
      id *= 1;
      this.memos.map((current, key) => {
        current.id === id && this.memos.splice(key, 1);
        localStorage.setItem("memos", JSON.stringify(this.memos));
        console.log(current.id, id);
      });
    },
  },
  mounted: function() {
    JSON.parse(localStorage.getItem("memos")) !== null &&
      (this.memos = JSON.parse(localStorage.getItem("memos")));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
