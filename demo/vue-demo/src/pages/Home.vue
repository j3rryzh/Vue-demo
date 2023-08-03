<template>
  <div class="home">
    <div class="buttons">
      <el-button @click="handleError">错误消息</el-button>
      <el-button @click="handleError1">错误消息1</el-button>
      <el-button @click="handleSuccess">成功消息</el-button>
      <el-button @click="handleSuccess1">成功消息1</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleError() {
      this.$message({ type: "error", message: "出错了" });
    },
    handleError1() {
      this.$message({ type: "error", message: "出错了----11" });
    },
    handleSuccess() {
      this.$message({
        type: "success",
        message: "终于成功啦啦啦啦啦"
      });
      // Message.success("终于成功啦啦啦啦啦");
    },
    handleSuccess1() {
      this.$message({
        type: "success",
        message: "终于成功啦啦啦啦啦2234234"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .buttons {
    margin-top: 60vh;
  }
}
</style>
