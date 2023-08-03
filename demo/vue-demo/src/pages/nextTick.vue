<template>
  <div class="next_tick">
    <div ref="tick">{{ message }}</div>
    <button @click="handleUpdate">更新</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "我只是一个文本"
    };
  },
  created() {},
  mounted() {
    console.log("C");
  },
  methods: {
    handleUpdate() {
      this.message = "我是程序员茄子";
      this.$nextTick(() => {
        console.log(this.$refs.tick.innerHTML);
      });
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 30px;
}
</style>
