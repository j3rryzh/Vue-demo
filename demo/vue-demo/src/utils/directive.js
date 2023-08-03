import Vue from "vue";

Vue.directive("dialogDrag", {
  bind(el, binding, vnode, oldVnode) {
    //弹框可拉伸最小宽高
    let minWidth = 400;
    let minHeight = 300;
    //初始非全屏
    let isFullScreen = false;
    //当前宽高
    let currentWidth = 0;
    let currentHight = 0;
    //当前顶部高度
    let currentMarginTop = 0;
    //获取弹框头部（这部分可双击全屏）
    const dialogHeader = el.querySelector(".el-dialog__header");
    //弹窗
    const dragDom = el.querySelector(".el-dialog");
    //给弹窗加上overflow auto；不然缩小时框内的标签可能超出dialog；
    dragDom.style.overflow = "auto";
    //头部加上可拖动cursor
    dialogHeader.style.cursor = "move";
    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);
    let moveDown = e => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeader.offsetLeft;
      const disY = e.clientY - dialogHeader.offsetTop;
      // 获取到的值带px 正则匹配替换
      let styL, styT;
      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (sty.left.includes("%")) {
        styL =
          +document.body.clientWidth * (+sty.left.replace(/\%/g, "") / 100);
        styT =
          +document.body.clientHeight * (+sty.top.replace(/\%/g, "") / 100);
      } else {
        styL = +sty.left.replace(/\px/g, "");
        styT = +sty.top.replace(/\px/g, "");
      }
      document.onmousemove = function(e) {
        // 通过事件委托，计算移动的距离
        const l = e.clientX - disX;
        const t = e.clientY - disY;
        // 移动当前元素
        dragDom.style.left = `${l + styL}px`;
        dragDom.style.top = `${t + styT}px`;
        //将此时的位置传出去
        //binding.value({x:e.pageX,y:e.pageY})
      };
      document.onmouseup = function(e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
    dialogHeader.onmousedown = moveDown;
    //双击头部全屏效果
    dialogHeader.ondblclick = e => {
      if (isFullScreen == false) {
        currentHight = dragDom.clientHeight;
        currentWidth = dragDom.clientWidth;
        currentMarginTop = dragDom.style.marginTop;
        dragDom.style.left = 0;
        dragDom.style.top = 0;
        dragDom.style.height = "100VH";
        dragDom.style.width = "100VW";
        dragDom.style.marginTop = 0;
        isFullScreen = true;
        dialogHeader.style.cursor = "initial";
        dialogHeader.onmousedown = null;
      } else {
        dragDom.style.height = "auto";
        dragDom.style.width = currentWidth + "px";
        dragDom.style.marginTop = currentMarginTop;
        isFullScreen = false;
        dialogHeader.style.cursor = "move";
        dialogHeader.onmousedown = moveDown;
      }
    };
    dragDom.onmousemove = function(e) {
      let moveE = e;
      if (
        e.clientX > dragDom.offsetLeft + dragDom.clientWidth - 10 ||
        dragDom.offsetLeft + 10 > e.clientX
      ) {
        dragDom.style.cursor = "w-resize";
      } else if (
        el.scrollTop + e.clientY >
        dragDom.offsetTop + dragDom.clientHeight - 10
      ) {
        dragDom.style.cursor = "s-resize";
      } else {
        dragDom.style.cursor = "default";
        dragDom.onmousedown = null;
      }
      dragDom.onmousedown = e => {
        const clientX = e.clientX;
        const clientY = e.clientY;
        let elW = dragDom.clientWidth;
        let elH = dragDom.clientHeight;
        let EleLeft = dragDom.offsetLeft;
        let EloffsetTop = dragDom.offsetTop;
        dragDom.style.userSelect = "none";
        let ELscrollTop = el.scrollTop;
        //判断点击的位置是不是为头部
        if (
          clientX > EleLeft &&
          clientX < EleLeft + elW &&
          clientY > EloffsetTop &&
          clientY < EloffsetTop + 100
        ) {
          //如果是头部在此就不做任何动作，以上有绑定dialogHeaderEl.onmousedown = moveDown;
        } else {
          document.onmousemove = function(e) {
            e.preventDefault(); // 移动时禁用默认事件
            //左侧鼠标拖拽位置
            if (clientX > EleLeft && clientX < EleLeft + 10) {
              //往左拖拽
              if (clientX > e.clientX) {
                dragDom.style.width = elW + (clientX - e.clientX) * 2 + "px";
              }
              //往右拖拽
              if (clientX < e.clientX) {
                if (dragDom.clientWidth < minWidth) {
                } else {
                  dragDom.style.width = elW - (e.clientX - clientX) * 2 + "px";
                }
              }
            }
            //右侧鼠标拖拽位置
            if (clientX > EleLeft + elW - 10 && clientX < EleLeft + elW) {
              //往左拖拽
              if (clientX > e.clientX) {
                if (dragDom.clientWidth < minWidth) {
                } else {
                  dragDom.style.width = elW - (clientX - e.clientX) * 2 + "px";
                }
              }
              //往右拖拽
              if (clientX < e.clientX) {
                dragDom.style.width = elW + (e.clientX - clientX) * 2 + "px";
              }
            }
            //底部鼠标拖拽位置
            if (
              ELscrollTop + clientY > EloffsetTop + elH - 20 &&
              ELscrollTop + clientY < EloffsetTop + elH
            ) {
              //往上拖拽
              if (clientY > e.clientY) {
                if (dragDom.clientHeight < minHeight) {
                } else {
                  dragDom.style.height = elH - (clientY - e.clientY) * 2 + "px";
                }
              }
              //往下拖拽
              if (clientY < e.clientY) {
                dragDom.style.height = elH + (e.clientY - clientY) * 2 + "px";
              }
            }
          };
          //拉伸结束
          document.onmouseup = function(e) {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        }
      };
    };
  }
});
