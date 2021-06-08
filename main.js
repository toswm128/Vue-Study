new Vue({
  el: "#app",
  data() {
    return {
      todos: ["a", "b"],
      content: "",
    };
  },
  methods: {
    addTodo: (e, value) => {
      console.log(this);
      const text = e.target[0].value;
    },
  },
});
