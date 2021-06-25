<template>
  <div class="header">
    <router-link class="item" to="/">
      홈
    </router-link>
    <span
      class="item"
      style="display:flex;flex-wrap:wrap;justify-content:space-between"
    >
      <span>
        M
      </span>
      <span>
        I
      </span>
      <span>
        M
      </span>
      <span>
        O
      </span>
    </span>
    <router-link class="item" to="/write">
      글쓰기
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  /* background-image: url("https://image.bugsm.co.kr/album/images/500/202611/20261125.jpg");
  background-size: cover;
  background-position-y: 400px; */
  background-color: black;
  position: fixed;
  box-sizing: border-box;
  border-left: 2px dashed white;
  right: 0;
}
.item {
  padding: 0 10px 0 10px;
  width: 35px;
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
  font-weight: bold;
}
</style>
