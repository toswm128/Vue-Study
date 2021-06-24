<template>
  <div class="write">
    <div class="title">
      <input type="text" v-model="title" />
    </div>
    <ckeditor v-model="content" :config="editorConfig"></ckeditor>
    <button v-on:click="addTodo">제출</button>
  </div>
</template>

<script>
export default {
  name: "Write",

  data() {
    return {
      memos: [],
      title: "",
      count: 0,
      content: "",
      editorData: "",
      editorConfig: { height: "500px", language: "ko" },
    };
  },
  methods: {
    addTodo: function() {
      const title = this.title;
      const content = this.content;
      this.memos.push({ id: this.count + 1, title, content, background: "" });
      localStorage.setItem("memos", JSON.stringify(this.memos));
      this.$router.push("/");
    },
  },
  mounted: function() {
    JSON.parse(localStorage.getItem("memos")) !== null &&
      (this.memos = JSON.parse(localStorage.getItem("memos")));
    this.count = this.memos[this.memos.length - 1].id;
    console.log(this.count);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  display: flex;
  height: 50px;
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
}
input {
  width: 100%;
  height: 25px;
  border: 0;

  outline: none;
  background-color: #f8f8f8;
  font-size: 1.3rem;
  padding: 0 1rem 0 1rem;
}
</style>
