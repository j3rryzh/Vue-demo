<template>
  <div
    class="scroll_box"
    :class="{ 'border-animate': isShow }"
    :style="{ '--i': item, '--delay': delay }"
    @animationend="isShow = false"
  >
    <div class="list_box" :class="{ animate: isShow }">
      <div>0</div>
      <div v-for="num in 9">{{ num }}</div>
      <div>0</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollNum",
  props: {
    item: {
      type: Number,
      default: 0,
      validator: val => val < 10 && val >= 0 && Number.isInteger(val)
    },
    delay: {
      type: Number,
      default: 1
    },
    blur: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      timer: null,
      isShow: true
    };
  },
  watch: {
    item() {
      this.isShow = true;
    }
  },
  mounted() {
    // const ua = navigator.userAgent.toLowerCase();
    // const testUA = regexp => regexp.test(ua);
    // const isSafari = testUA(/safari/g) && !testUA(/chrome/g);
    // // Safari浏览器的兼容代码
    // isSafari &&
    //   (this.timer = setTimeout(() => {
    //     this.$refs.ul.setAttribute(
    //       "style",
    //       `
    //       animation: none;
    //       transform: translateY(calc(var(--i) * -9.05%))
    //     `
    //     );
    //   }, this.delay * 1000));
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>

<style scoped lang="scss">
.scroll_box {
  width: 70px;
  height: 90px;
  font-size: 50px;
  overflow: hidden;
  line-height: 90px;
  text-align: center;
  // font-size: var(--height, calc(var(--width, 20px) * 1.1));
  // line-height: var(--height, calc(var(--width, 20px) * 1.8));
}

.animate {
  animation: move 0.3s linear infinite,
    bounce-into 1s calc(var(--delay) * 1s) forwards;
}
.border-animate {
  animation: enhance-bounce-into 1s calc(var(--delay) * 1s) forwards;
}

.list_box {
  color: #fff;
  transform: translateY(calc(var(--i) * -9.05%));
}

@keyframes move {
  from {
    transform: translateY(-90%);
    filter: url(#blur);
  }
  to {
    transform: translateY(1%);
    filter: url(#blur);
  }
}

@keyframes bounce-into {
  from {
    transform: translateY(calc(var(--i) * -9.05% - 7%));
    filter: none;
  }
  25% {
    transform: translateY(calc(var(--i) * -9.05% + 3%));
  }
  50% {
    transform: translateY(calc(var(--i) * -9.05% - 1%));
  }
  70% {
    transform: translateY(calc(var(--i) * -9.05% + 0.6%));
  }
  85% {
    transform: translateY(calc(var(--i) * -9.05% - 0.3%));
  }
  to {
    transform: translateY(calc(var(--i) * -9.05%));
  }
}

@keyframes enhance-bounce-into {
  25% {
    transform: translateY(8%);
  }
  50% {
    transform: translateY(-4%);
  }
  70% {
    transform: translateY(2%);
  }
  85% {
    transform: translateY(-1%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
