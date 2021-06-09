<template>
  <div>
    <div>
      안녕
    </div>
    <div>
      {{ title }}
      {{ $route.params.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Memo",
  data() {
    return {
      title: "hi",
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
