<template>
  <div class="todo">
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="title" />
      <ckeditor v-model="content" :config="editorConfig"></ckeditor>

      <button>제출</button>
    </form>
    <ul>
      <router-link
        class="list"
        v-on:click="del"
        v-for="item in this.todos"
        :key="item.id"
        :id="item.id"
        :to="{ path: 'memo', query: { id: item.id } }"
      >
        {{ item.title }}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todo",

  data() {
    return {
      todos: [],
      title: "",
      content: "",
      editorData: "",
      editorConfig: { height: "500px", language: "ko" },
    };
  },
  methods: {
    del: function(e) {
      var id = e.target.id;
      id *= 1;
      this.todos.map((current, key) => {
        current.id === id && this.todos.splice(key, 1);
      });
    },
    addTodo: function() {
      const title = this.title;
      const content = this.content;
      this.todos.push({ id: this.todos.length, title, content });
      localStorage.setItem("memos", JSON.stringify(this.todos));
      this.content = "";
    },
  },
  mounted: function() {
    JSON.parse(localStorage.getItem("memos")) !== null
      ? (this.todos = JSON.parse(localStorage.getItem("memos")))
      : console.log(this.todos);

    console.log(this.todos);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
