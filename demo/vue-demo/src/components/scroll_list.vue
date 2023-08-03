<template>
  <div
    class="scroll_box"
    :style="{ '--i': item, '--delay': delay }"
    @animationend="isShow = false"
  >
    <div class="list_box" :class="{ animate: isShow }">
      <div>0</div>
      <div v-for="num in 9" :key="num">{{ num }}</div>
      <div>0</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollList",
  props: {
    item: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 1
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
  mounted() {},
  beforeDestroy() {}
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
}
.list_box {
  color: #fff;
  transform: translateY(calc(var(--i) * -9.05%));
}

.animate {
  animation: move 0.3s linear infinite,
    bounce-into 0.8s calc(var(--delay) * 0.5s) forwards;
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
</style>
