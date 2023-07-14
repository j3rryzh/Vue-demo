<template>
  <div class="com_">
    <ComA v-if="isShow" />
    <Dialog
      v-if="dialogTableVisible"
      @closeEvent="closeEvent"
      :dialogTableVisible.sync="dialogTableVisible"
    />
    <el-button type="primary" @click="isShow = !isShow">显示</el-button>
    <el-button type="text" @click="dialogTableVisible = !dialogTableVisible"
      >控制弹窗</el-button
    >
  </div>
</template>

<script>
// import Dialog from "../components/Dialog.vue";
// import ComA from "../components/condition/comA.vue";
export default {
  components: {
    ComA: () => import("../components/condition/comA.vue"),
    Dialog: () => import("../components/Dialog.vue")
  },
  data() {
    return {
      isShow: false,
      dialogTableVisible: false
    };
  },
  methods: {
    closeEvent(done) {
      this.$emit("update:dialogTableVisible", false);
    }
  }
};
</script>

<style scoped>
.com_ {
  padding-top: 50px;
}
</style>
