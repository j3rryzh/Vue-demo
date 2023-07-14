<template>
  <div class="animation">
    <div class="content">
      <h1>GreenSock Starter Template</h1>
      <h2>
        <div>
          GreenSock动画平台（GSAP）
          可以对JavaScript可以操作的所有内容进行动画处理（CSS属性，SVG，React，画布，通用对象等），
        </div>
        <div>
          同时解决了不同浏览器上存在的兼容性问题，而且速度极快（比jQuery快20倍）。大约有1000万个站点和许多主要品牌都使用
          GSAP。
        </div>
      </h2>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {};
  },
  mounted() {
    const anim = gsap.to(".content", {
      opacity: 0,
      paused: true,
      fontSize:"50px",
      color:"red",
      backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
    });

    ScrollTrigger.create({
      trigger: "body",
      start: 0, //起始点:当触发器顶部到达视口的顶部
      end: "bottom bottom",
      animation: anim,
      pin: ".content",
      scrub: true
    });
  }
};
</script>

<style>
.animation {
  height: 300vh;
  font-family: "Signika Negative", sans-serif;
  font-weight: 300;
  margin: 0;
  padding: 0 20px;
}
.content {
  height: 50vh;
}
</style>
