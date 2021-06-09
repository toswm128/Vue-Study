<template>
  <div class="memo" v-on:click="paint">
    <div class="content">
      <div class="header">
        <span class="title"> 제목: {{ title }} </span>
        <span class="id"> id: {{ id }} </span>
      </div>
      <div class="writing">
        안녕하게요용ㅁㄴ어ㅗㅁㄴ어ㅏㅁㄴ
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Memo",
  props: { id: Number },
  data() {
    return {
      memos: JSON.parse(localStorage.getItem("memos")),
      title: this.memos.map(memo => {
        console.log(memo.text);
        if (memo.id === this.id) {
          return memo.text;
        }
      }),
    };
  },
  methods: {
    paint: function() {
      console.log("aa");
    },
  },
  mounted: function() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content {
  width: 800px;
  margin-right: auto;
  margin-left: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.header .title {
  font-size: 24px;
  font-weight: bold;
}

.header .id {
}

.writing {
  margin-top: 3rem;
}
</style>
