<template>
  <div>
    <ul>
      <li v-for="city in list" :key="city.id">
        {{ city.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.$axios.get("/city").then((res) => {
      this.list = res.data.result;
    });
  },
};
</script>