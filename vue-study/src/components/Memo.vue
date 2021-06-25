<template>
  <div class="memo">
    <div class="content">
      <div class="header">
        <span class="title"> 제목: {{ title }} </span>
        <span class="id"> id: {{ id }} </span>
      </div>
      <div class="writing" v-html="content"></div>
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
      title: "",
      content: "",
    };
  },

  mounted: function() {
    this.memos.map(memo => {
      console.log(memo.text, memo.id);
      if (memo.id === this.id * 1) {
        console.log(memo.text, "a");
        this.title = memo.title;
        this.content = memo.content;
        console.log(this);
      } else {
        console.log(memo.id, this);
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content {
  width: 1000px;
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
