<template>
  <div class="main">
    <div class="content">
      <ul v-for="item in this.memos" :key="item.id">
        <router-link
          class="list"
          :to="{ path: 'memo', query: { id: item.id } }"
        >
          <img
            :src="item.background ? item.background : background[item.id - 1]"
            :alt="item.id"
            v-if="background[item.id - 1] !== undefind"
          />
          <img
            :src="item.background"
            :alt="item.id"
            v-else-if="item.background !== ``"
          />
          <div class="title">
            {{ item.title }}
          </div>
          <input
            type="text"
            :id="item.id"
            placeholder="이미지 url을 입력해주세요..."
            v-on:click="e => e.preventDefault()"
            v-on:keydown="handleImageUrl"
          />
        </router-link>
        <button v-on:click="del" :id="item.id">삭제</button>
      </ul>
    </div>
  </div>
</template>

<script>
import { background } from "../assets/background.json";
export default {
  name: "Main",

  data() {
    return {
      memos: [],
      background,
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
    handleImageUrl: function(e) {
      if (e.key === "Enter") {
        const id = e.target.id;

        this.memos.map((current, key) => {
          current.id == id && (this.memos[key].background = e.target.value);
        });
        localStorage.setItem("memos", JSON.stringify(this.memos));
        e.target.value = "";
      }
    },
  },
  mounted: function() {
    JSON.parse(localStorage.getItem("memos")) !== null &&
      (this.memos = JSON.parse(localStorage.getItem("memos")));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  justify-content: center;
  background: #22632e;
}
.content {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
ul {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
}
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px dashed red;
  background: #be873a;
  box-shadow: 10px 10px 73px -37px rgba(0, 0, 0, 0.75);
  padding: 10px;
  text-decoration: none;
  box-sizing: border-box;
}
td {
  width: 100%;
}
img {
  width: 480px;
}
.title {
  width: 100%;
  background: white;
  color: black;
}
button {
  width: 100%;
  font-size: 1.3rem;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  color: gray;
  border: 0;
  cursor: pointer;
  padding: 0.5rem 0 0.5rem 0;
  transition: 0.5s ease-in-out;
}
button:hover {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  color: white;
  background-color: #ed4337;
}
</style>
