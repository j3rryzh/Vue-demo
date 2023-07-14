<template>
  <div class="container">
    <div class="top zoom">
      <div class="title tracking-in-contract">
        Huterox AI
      </div>
      <div class="content">
        Huterox 的开源 AI 算法开放平台
      </div>
    </div>
    <div class="main  color-change-5x">
      <div class="jianjie">
        <div class="part">
          <div class="partTitle">
            开放视觉
          </div>
          <div class="partContent">
            图像识别，目标检测，人体关键点检测
          </div>
        </div>
        <div class="part">
          <div class="partTitle">
            数据云盘
          </div>
          <div class="partContent">
            自定义数据集，定制化模型训练
          </div>
        </div>
        <div class="part">
          <div class="partTitle">
            内容生成
          </div>
          <div class="partContent">
            文本到内容，2D到3D，无限可能
          </div>
        </div>
      </div>
      <div class="jieshao">
        <div class="jie">
          <div class="jieleft zoom"></div>
          <div class="jieright">
            <div class="jierighttop">
              <!--方块特效 -->
              <div id="alternate">
                <div class="square1 el"></div>
              </div>
            </div>
            <!-- 文字说明 -->
            <div class="jierightbot" ref="box"></div>
          </div>
        </div>
      </div>
      <div class="jieshao">
        <div class="jie">
          <div class="jieleft1">
            <div class="jierighttop1">
              <!--特效 -->
              <div id="svgAttributes">
                <svg width="256" height="256" viewBox="0 0 128 128">
                  <polygon
                    points="64 68.8628077439766 8.574 99.98498600107975 63.240037962811925 67.54607512963132 64 3.984986001079744 64.75996203718807 67.54607512963132 119.426 99.98498600107975 "
                    fill="currentColor"
                  ></polygon>
                </svg>
              </div>
            </div>
            <!-- 文字说明 -->
            <div class="jierightbot" ref="box1"></div>
          </div>
          <div class="jieright1 zoom"></div>
        </div>
      </div>
      <!-- 第三部分的 -->
      <div class="jieshao">
        <div class="jie">
          <div class="jieleft2 zoom"></div>
          <div class="jieright">
            <div class="jierighttop1">
              <!--特效 -->
              <div id="morphing">
                <svg width="280" height="280" viewBox="0 0 140 140">
                  <g fill="none" fill-rule="evenodd">
                    <g
                      fill="currentColor"
                      fill-opacity=".15"
                      transform="translate(0 6)"
                    >
                      <polygon
                        points="70 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369"
                      ></polygon>
                      <polygon
                        points="70 18 119.455 53.931 100.565 112.069 39.435 112.069 20.545 53.931"
                      ></polygon>
                      <polygon
                        points="70 34.86 101.727 57.911 89.609 95.209 50.391 95.209 38.273 57.911"
                      ></polygon>
                      <polygon
                        points="70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697"
                      ></polygon>
                    </g>
                    <polygon
                      class="polymorph"
                      stroke-width="1"
                      stroke="currentColor"
                      points="70 26.11463815070492 119.44960952054677 60.24460952054677 101.51329527398553 119.49685719179845 52.0989047945323 99.51636184929508 5.540638150704919 55.11534287671938 "
                    ></polygon>
                  </g>
                </svg>
              </div>
            </div>
            <!-- 文字说明 -->
            <div class="jierightbot" ref="box2"></div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer">
        <!-- 特效 -->
        <div class="footershow">
          <div id="penner">
            <div class="line">
              <div
                class="small stretched square linear"
                style="transform: translateX(8.32375px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InQuad"
                style="transform: translateX(1.41935px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InCubic"
                style="transform: translateX(0.872133px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InQuart"
                style="transform: translateX(0.302639px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InQuint"
                style="transform: translateX(0.552566px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InSine"
                style="transform: translateX(0.301091px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InExpo"
                style="transform: translateX(0.437774px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InCirc"
                style="transform: translateX(0.625275px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InBack"
                style="transform: translateX(-3.78142px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square OutQuad"
                style="transform: translateX(15.4575px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square OutCubic"
                style="transform: translateX(23.5359px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square OutQuart"
                style="transform: translateX(38.4933px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square OutQuint"
                style="transform: translateX(35.4011px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square OutSine"
                style="transform: translateX(12.371px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square OutExpo"
                style="transform: translateX(43.1485px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square OutCirc"
                style="transform: translateX(75.0978px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square OutBack"
                style="transform: translateX(40.8483px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InOutQuad"
                style="transform: translateX(0.970785px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InOutCubic"
                style="transform: translateX(0.805919px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InOutQuart"
                style="transform: translateX(0.162609px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InOutQuint"
                style="transform: translateX(0.130278px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InOutSine"
                style="transform: translateX(1.35859px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InOutExpo"
                style="transform: translateX(0.0959568px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InOutCirc"
                style="transform: translateX(1.56201px);"
              ></div>
            </div>
            <div class="line">
              <div
                class="small stretched square InOutBack"
                style="transform: translateX(-6.36447px);"
              ></div>
            </div>
          </div>
        </div>
        <div class="footText">
          Huterox is Awesome
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import anime from "animejs";
export default {
  name: "index",
  mounted() {
    const jieright1 =
      "集成众多视觉算法，高效，稳定完成图像识别，目标检测，人体关键点检测等多项任务。";
    this.TypewriterDom(this.$refs.box, jieright1, true, this.RunGui);
    const jieright2 = "开放云盘，支持自定义数据集，定制化任务，快速导入数据。";
    this.TypewriterDom(this.$refs.box1, jieright2, true, this.RunGui1);
    const jieright3 =
      "支持内容生成技术，文本到图像，图像2D到3D，未来可期，无所不能。";
    this.TypewriterDom(this.$refs.box2, jieright3, true, this.RunGui2);

    this.RunGui3();
  },
  methods: {
    RunGui3() {
      var penner = anime.timeline({
        loop: true,
        direction: "alternate",
        duration: 150
      });
      penner
        .add({
          targets: "#penner .linear",
          translateX: 1100,
          offset: 0,
          easing: "linear"
        })
        .add({
          targets: "#penner .InQuad",
          translateX: 1100,
          offset: 0,
          easing: "easeInQuad"
        })
        .add({
          targets: "#penner .InCubic",
          translateX: 1100,
          offset: 0,
          easing: "easeInCubic"
        })
        .add({
          targets: "#penner .InQuart",
          translateX: 1100,
          offset: 0,
          easing: "easeInQuart"
        })
        .add({
          targets: "#penner .InQuint",
          translateX: 1100,
          offset: 0,
          easing: "easeInQuint"
        })
        .add({
          targets: "#penner .InSine",
          translateX: 1100,
          offset: 0,
          easing: "easeInSine"
        })
        .add({
          targets: "#penner .InExpo",
          translateX: 1100,
          offset: 0,
          easing: "easeInExpo"
        })
        .add({
          targets: "#penner .InCirc",
          translateX: 1100,
          offset: 0,
          easing: "easeInCirc"
        })
        .add({
          targets: "#penner .InBack",
          translateX: 1100,
          offset: 0,
          easing: "easeInBack"
        })
        .add({
          targets: "#penner .OutQuad",
          translateX: 1100,
          offset: 0,
          easing: "easeOutQuad"
        })
        .add({
          targets: "#penner .OutCubic",
          translateX: 1100,
          offset: 0,
          easing: "easeOutCubic"
        })
        .add({
          targets: "#penner .OutQuart",
          translateX: 1100,
          offset: 0,
          easing: "easeOutQuart"
        })
        .add({
          targets: "#penner .OutQuint",
          translateX: 1100,
          offset: 0,
          easing: "easeOutQuint"
        })
        .add({
          targets: "#penner .OutSine",
          translateX: 1100,
          offset: 0,
          easing: "easeOutSine"
        })
        .add({
          targets: "#penner .OutExpo",
          translateX: 1100,
          offset: 0,
          easing: "easeOutExpo"
        })
        .add({
          targets: "#penner .OutCirc",
          translateX: 1100,
          offset: 0,
          easing: "easeOutCirc"
        })
        .add({
          targets: "#penner .OutBack",
          translateX: 1100,
          offset: 0,
          easing: "easeOutBack"
        })
        .add({
          targets: "#penner .InOutQuad",
          translateX: 1100,
          offset: 0,
          easing: "easeInOutQuad"
        })
        .add({
          targets: "#penner .InOutCubic",
          translateX: 1100,
          offset: 0,
          easing: "easeInOutCubic"
        })
        .add({
          targets: "#penner .InOutQuart",
          translateX: 1100,
          offset: 0,
          easing: "easeInOutQuart"
        })
        .add({
          targets: "#penner .InOutQuint",
          translateX: 1100,
          offset: 0,
          easing: "easeInOutQuint"
        })
        .add({
          targets: "#penner .InOutSine",
          translateX: 1100,
          offset: 0,
          easing: "easeInOutSine"
        })
        .add({
          targets: "#penner .InOutExpo",
          translateX: 1100,
          offset: 0,
          easing: "easeInOutExpo"
        })
        .add({
          targets: "#penner .InOutCirc",
          translateX: 1100,
          offset: 0,
          easing: "easeInOutCirc"
        })
        .add({
          targets: "#penner .InOutBack",
          translateX: 1100,
          offset: 0,
          easing: "easeInOutBack"
        });
    },

    RunGui2() {
      anime({
        targets: "#morphing .polymorph",
        points: [
          {
            value:
              "70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369"
          },
          {
            value:
              "70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369"
          },
          {
            value:
              "70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369"
          },
          {
            value:
              "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369"
          }
        ],
        easing: "easeOutQuad",
        duration: 2000,
        loop: true
      });
    },

    RunGui1() {
      anime({
        targets: "#svgAttributes polygon",
        points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96",
        easing: "easeInOutExpo",
        duration: 3000,
        loop: true
      });
    },

    RunGui() {
      anime({
        targets: "#alternate .el",
        translateX: 100,
        direction: "alternate",
        loop: true
      });
    },

    /**
     * 打字机特效，通过anime.js来实现，传入定位的Dome，显示的文字
     * 还有是否一直监听
     */
    TypewriterDom(refDom, showString, runover, func) {
      // 创建 IntersectionObserver 实例
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.Typewriter(refDom, showString);
            //一次就好，避免资源浪费
            if (func) {
              func();
            }
            if (runover) {
              io.unobserve(refDom);
            }
          }
        });
      });
      // 开始监听
      io.observe(refDom);
    },

    Typewriter(refDom, showString) {
      const textContainer = refDom;
      const text = showString;
      let charIndex = 0;
      const animateText = () => {
        textContainer.innerHTML = text.slice(0, charIndex);
        charIndex++;

        if (charIndex <= text.length) {
          anime({
            targets: textContainer,
            opacity: [1, 1],
            duration: 100,
            easing: "linear",
            complete: animateText
          });
        }
      };
      animateText();
    }
  }
};
</script>

<style scoped>
.footText {
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: whitesmoke;
}
.square {
  margin-left: 80px;
  margin-top: 2px;
  border-radius: 5px;
  width: 150px;
  height: 10px;
  background-color: #0d6cd8;
}
.footershow {
  display: flex;
  align-items: center;
  width: 100%;
  height: 400px;
  align-items: center;
  border-block-end: 3px whitesmoke solid;
}
.footer {
  margin-top: 1%;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
}

.jieleft2 {
  margin-left: 10%;
  width: 40%;
  height: 500px;
  display: flex;
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  /* background-image: url(../../assets/img/neirong.jpg); */
}

.jierighttop1 {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  display: flex;
  color: whitesmoke;
  font-size: 30px;
}

.jieright1 {
  border-radius: 50px;
  /* background-image: url(../../assets/img/yunpan.jpg); */
  background-size: cover;
  background-position: center;
  margin-left: 2%;
  width: 40%;
  height: 500px;
  display: flex;
  flex-direction: column;
}

.jieleft1 {
  flex-direction: column;
  margin-left: 10%;
  width: 40%;
  height: 500px;
  display: flex;
}

.square1 {
  height: 100px;
  border-radius: 100px;
  width: 100px;
  background-color: rgb(33, 138, 231);
}
.jierighttop {
  align-items: center;
  width: 100%;
  height: 200px;
  display: flex;
  color: whitesmoke;
  font-size: 30px;
}

.jierightbot {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  color: whitesmoke;
  font-size: 30px;
}
.jieright {
  margin-left: 2%;
  width: 40%;
  height: 500px;
  display: flex;
  flex-direction: column;
}

.jieleft {
  margin-left: 10%;
  width: 40%;
  height: 500px;
  display: flex;
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  /* background-image: url(../../assets/img/shijue.jpg); */
}

.jie {
  width: 100%;
  height: 300px;
  display: flex;
}
.jieshao {
  margin-top: 1%;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
}
.partTitle {
  color: whitesmoke;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
}

.partTitle:hover {
  -webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
}
@keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
}

.partContent {
  color: whitesmoke;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
}
.part {
  width: 33%;
  height: 300px;
  display: flex;
  flex-direction: column;
}
.jianjie {
  display: flex;
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: 250px;
  border-block-end: 3px whitesmoke solid;
}
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.box_center {
  margin: 20px;
  width: 100%;
  width: 100%;
  background-color: #0d6cd8;
}

.content {
  font-size: 50px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
}
.title {
  margin-top: 200px;
  font-size: 80px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
}
.tracking-in-contract {
  -webkit-animation: tracking-in-contract 5s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-contract 5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}
@-webkit-keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}
@keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}

.top {
  background-position: center;
  flex-direction: column;
  width: 100%;
  height: 600px;
  display: flex;
  background-color: #02162e;
  /* background-image: url("../../assets/img/bg.jpg"); */
  background-size: cover;
}
.zoom {
  /* background-size: 125%; */
  -webkit-animation: zoom 10s infinite alternate ease-in-out both;
  animation: zoom 10s infinite alternate ease-in-out both;
}
@keyframes zoom {
  0% {
    background-size: 100%;
  }
  100% {
    background-size: 125%;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  display: flex;
  margin: 0 auto;
}
.color-change-5x {
  -webkit-animation: color-change-5x 8s linear infinite alternate both;
  animation: color-change-5x 8s linear infinite alternate both;
}

@-webkit-keyframes color-change-5x {
  0% {
    background: #363637;
  }
  25% {
    background: #414142;
  }
  50% {
    background: #272a2d;
  }
  75% {
    background: #464646;
  }
  100% {
    background: #151515;
  }
}
@keyframes color-change-5x {
  0% {
    background: #02162e;
  }
  25% {
    background: #26262f;
  }
  50% {
    background: rgb(60, 60, 65);
  }
  75% {
    background: #1d1d2e;
  }
  100% {
    background: #212d2d;
  }
}
</style>
