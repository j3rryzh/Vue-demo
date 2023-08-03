<template>
  <div>
    <div class="carousel">
      <img
        src="https://img.alicdn.com/imgextra/i4/O1CN01GOlEEW1zidUliI8O7_!!6000000006748-2-tps-846-472.png"
        alt=""
      />
    </div>
    <div class="layout">
      <div class="module">
        <img
          src="https://gw.alicdn.com/imgextra/i4/O1CN01XCiY1B1px9ivHkDGm_!!6000000005426-2-tps-183-144.png_q90.jpg"
          alt=""
        />
      </div>
      <div class="module">
        <img
          src="https://gw.alicdn.com/imgextra/i2/O1CN01yK3Cxn1sTnAx1fOjq_!!6000000005768-2-tps-183-144.png_q90.jpg"
          alt=""
        />
      </div>
      <div class="module">
        <img
          src="https://gw.alicdn.com/imgextra/i1/O1CN018Ilnep1Qt9ryh1Vue_!!6000000002033-2-tps-183-144.png_q90.jpg"
          alt=""
        />
      </div>
      <div class="module">
        <img
          src="https://gw.alicdn.com/tfs/TB1WgOmesieb18jSZFvXXaI3FXa-183-144.png_q90.jpg?getAvatar=1"
          alt=""
        />
      </div>
    </div>
    <transition-group @before-enter="beforeEnter" @enter="enterEvent">
      <div
        class="item_box"
        v-show="showItem"
        v-for="item in 10"
        :data-index="item"
        :key="item"
      >
        <div class="picture"></div>
        <div class="content">
          <div>-------</div>
          <div>-------</div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showItem: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showItem = true;
    },200)
    // this.showItem = true;
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enterEvent(el,done) {
      let delay = el.dataset.index * 120;
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transition = "opacity .5s"
        el.style.animation = "instep .5s"
      }, delay);
    },
  },
};
</script>

<style lang="scss">
.carousel {
  width: 97%;
  height: 140px;
  margin: 10px 5px;
  border-radius: 8px;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item_box {
  margin: 5px;
  padding: 0px;
  overflow: hidden;
  &::after {
    content: "";
    clear: both;
    display: block;
  }
}
.item_box div {
  display: inline;
  float: left;
}
.layout {
  display: flex;
  justify-content: space-between;
}
.module {
  width: 65px;
  height: 65px;
  margin: 10px 12px;
  margin-top: 0px;
  border-radius: 8px;
}

.picture {
  width: 20%;
  height: 75px;
  background: #f1f3f4;
  border-radius: 8px;
}
.content {
  width: 79%;
  div {
    margin: 15px;
    margin-top: 0px;
    padding: 0px;
    width: 95%;
    border-radius: 8px;
    line-height: 30px;
    background: #f1f3f4;
    color: #f1f3f4;
  }
}
.content div:last-child {
  width: 60%;
  background: #f1f3f4;
}

@keyframes instep {
  from {
    margin-left: 100%;
  }

  to {
    margin-left: 0%;
  }
}
</style>
