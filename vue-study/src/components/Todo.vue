<template>
  <div class="todo">
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="content" />
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
        {{ item.text }}
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
      content: "",
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
      const text = this.content;
      this.todos.push({ text, id: this.todos.length });
      this.content = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
