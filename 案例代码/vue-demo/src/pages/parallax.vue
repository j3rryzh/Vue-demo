<template>
  <div class="css_demo">
    <div class="word">视差滚动</div>
    <div class="bg bg1"></div>
    <div class="word">二</div>
    <div class="bg bg2"></div>
    <div class="word">三</div>
    <div class="bg bg3"></div>
    <div class="word">四</div>
    <div class="bg bg4"></div>
    <div class="word">五</div>
    <div class="bg bg5"></div>
    <div class="word">六</div>
    <div class="bg bg6"></div>
    <div class="word">七</div>
    <div class="bg bg7"></div>
    <div class="word">八</div>
    <div class="bg bg8"></div>
    <div class="word">九</div>
    <div class="bg bg9"></div>
  </div>
</template>
<style lang="scss" scoped>
.css_demo {
  width: 100%;
  height: 100%;
  overflow: scroll;
  .bg {
    height: 40vh;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    &.bg1 {
      background-image: url("https://lmg.jj20.com/up/allimg/4k/s/02/2109250006343S5-0-lp.jpg");
    }
    &.bg2 {
      background-image: url("https://lmg.jj20.com/up/allimg/4k/s/02/210924233115O14-0-lp.jpg");
    }
    &.bg3 {
      background-image: url("https://lmg.jj20.com/up/allimg/1113/031920120534/200319120534-7-1200.jpg");
    }
    &.bg4 {
      background-image: url("/src/assets/img/4.webp");
    }
    &.bg5 {
      background-image: url("/src/assets/img/5.webp");
    }
    &.bg6 {
      background-image: url("/src/assets/img/6.webp");
    }
    &.bg7 {
      background-image: url("/src/assets/img/7.webp");
    }
    &.bg8 {
      background-image: url("/src/assets/img/8.webp");
    }
    &.bg9 {
      background-image: url("/src/assets/img/9.webp");
    }
  }
}
div {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  line-height: 100vh;
  text-align: center;
  font-size: 20vh;
}
</style>
