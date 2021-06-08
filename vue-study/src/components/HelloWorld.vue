<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="content" />
    </form>
    <ul>
      <li
        class="list"
        v-on:click="del"
        v-for="item in this.todos"
        v-bind:key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      todos: ["a", "b"],
      content: "",
    };
  },
  methods: {
    del: function() {
      console.log(this.todos);
    },
    addTodo: function() {
      console.log(this.content);
      this.todos.push(this.content);
      this.content = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
