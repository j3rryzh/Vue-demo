<template>
  <div class="box">
    <el-input v-model="value" />
    <h1>{{ num.toFixed(2) }}</h1>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  data() {
    return {
      value: 0, //初始值
      num: 0 //变化初始值
    };
  },
  watch: {
    //监听变化,实现动态过渡
    value(num) {
      gsap.to(this, { duration: 0.5, num: Number(num) || 0 });
    }
  }
};
</script>

<style scoped>
.el-input {
  width: 40%;
  margin: 100px auto;
}
</style>
