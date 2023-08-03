<template>
  <div class="container">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  data() {
    return {};
  },
  mounted() {
    // gsap.from(
    //   ".box1",
    //   {
    //     duration: 1,
    //     x: 400,
    //     delay: 1
    //   }
    // );
    // gsap.fromTo(
    //   ".box1",
    //   {
    //     duration: 1,
    //     x: 200,
    //     delay: 1,
    //     opacity:.5
    //   },
    //   {
    //     duration: 1,
    //     x: 500,
    //     delay: 1,
    //     opacity:1
    //   }
    // );
    // gsap.set(".box1", {
    //   duration: 1,
    //   x: 600,
    //   delay: 1,
    // });
    const animate = gsap.timeline();
    animate
      .to(".box1", {
        duration: 1,
        x: 600,
        delay: 1
      })
      .to(".box2", {
        duration: 1,
        y: 400,
        delay: 1,
        repeat: 2
      })
      .to(".box3", {
        duration: 1,
        y: 400,
        delay: 1,
        repeat: 2
      });
  },
  watch: {},
  methods:{
    handleError() {
      this.$message({ type: "error", message: "提示内容" });
    },
    handleSuccess() {
      this.$message({ type: "error", message: "提示内容" });
    }
  }
};
</script>
<style lang="scss" scoped>
.box1 {
  height: 200px;
  width: 200px;
  background: red;
}
.box2 {
  height: 200px;
  width: 200px;
  background: #67c23a;
}
.box3 {
  height: 200px;
  width: 200px;
  background: pink;
}
</style>
