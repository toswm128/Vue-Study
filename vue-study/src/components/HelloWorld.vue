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
        v-bind:key="item.id"
        :id="item.id"
      >
        {{ item.text }}
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
      todos: [],
      content: "",
    };
  },
  methods: {
    del: function(e) {
      var id = e.target.id;
      id *= 1;
      console.log(id);
      this.todos.map((current, key) => {
        current.id === id && this.todos.splice(key, 1);
        current.id === id && console.log(key);
      });
    },
    addTodo: function() {
      const text = this.content;
      this.todos.push({ text, id: this.todos.length });
      this.content = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
