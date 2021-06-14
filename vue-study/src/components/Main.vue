<template>
  <div class="main">
    <div class="content">
      <ul v-for="item in this.memos" :key="item.id">
        <img :src="background[item.id - 1]" alt="" />
        <router-link
          class="list"
          :to="{ path: 'memo', query: { id: item.id } }"
        >
          {{ item.title }}
        </router-link>
        <button v-on:click="del" :id="item.id">삭제</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",

  data() {
    return {
      memos: [],
      background: [
        "https://cdn.discordapp.com/attachments/676942969710051360/853799693238534144/ab0b164fd8c516bc.gif",
        "https://lh3.googleusercontent.com/proxy/FEM6ng8jtZ5YicDQcOoK6VyXeOsZaRzkEqdlScjdql1PngCDdL3RK5SfQkwzKSC64jmsCzeHYh-uYOwfHONdEnrmbSgMcd9djpgRwtVzfvrRpFaS6YVKxZH0sg",
        "https://img.insight.co.kr/static/2019/01/31/700/18nd52ajs5z4750u7p6f.jpg",
        "https://img.hankyung.com/photo/201808/03.17543429.1.jpg",
        "http://ojsfile.ohmynews.com/STD_IMG_FILE/2020/0130/IE002597642_STD.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3FDg9Q7JRnV2SGsvXhRJyafXFWZKatrUHg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs52rnezs7eGzT8hxJkEHhtHivFzOh03XPYz1i_xOvIZaDR2bMmyU0IHYXMQlYNhTdg_I&usqp=CAU",
        "https://image.musinsa.com/mfile_s01/2020/02/07/f99687dd719c4e8bc6a39e946c3d9ef7114955.jpg",
        "https://pbs.twimg.com/media/EQJGuF9U0AEB3QG.jpg",
      ],
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
  align-items: flex-end;
  padding: 0;
}
img {
  width: 100%;
}
</style>
