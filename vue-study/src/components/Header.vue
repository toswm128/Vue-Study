<template>
  <div class="header">
    <router-link to="/">
      홈
    </router-link>
    <router-link to="/write">
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
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  background-image: url("https://image.bugsm.co.kr/album/images/500/202611/20261125.jpg");
  background-size: cover;
  background-position-y: 400px;
}
a {
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
  font-weight: bold;
}
</style>
