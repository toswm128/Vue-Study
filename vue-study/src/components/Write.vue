<template>
  <div class="write">
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="title" />
      <ckeditor v-model="content" :config="editorConfig"></ckeditor>
      <button>제출</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Write",

  data() {
    return {
      memos: [],
      title: "",
      content: "",
      editorData: "",
      editorConfig: { height: "500px", language: "ko" },
    };
  },
  methods: {
    addTodo: function() {
      const title = this.title;
      const content = this.content;
      this.memos.push({ id: this.memos.length, title, content });
      localStorage.setItem("memos", JSON.stringify(this.memos));
      this.content = "";
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
