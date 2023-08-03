// 定义游戏容器类
class Game {
  constructor(container) {
    // 游戏容器
    this.container = container;
    // 计时器
    this.timer = null;
    // 游戏状态
    this.state = false;
    // 游戏速度
    this.speed = 2;
    // 游戏容器顶部
    this.top = -150;
    // 最后一行
    this.lastRowChilds = null;
  }

  // 定义开始游戏事件
  start() {
    let _this = this;
    this.state = true;
    // 创建行
    for (let i = 0; i < 4; i++) {
      this.createRow();
    }

    // 时间处理时间
    this.timer = setInterval(() => {
      _this.move();
      _this.judge();
    }, 25);
  }

  //创建新行
  createRow() {
    //添加内容从首子节点开始添加
    let firstChild = this.container.firstChild;
    let rowDiv = document.createElement("div");
    rowDiv.className = "row";
    // 行内方块，随机黑色
    let blocks = ["block", "block", "block", "block"];
    let random = Math.floor(Math.random() * 4);
    blocks[random] = "black";
    // 添加进入行
    for (let i = 0; i < 4; i++) {
      let block = document.createElement("div");
      block.className = blocks[i];
      rowDiv.appendChild(block);
    }

    if (firstChild == null) {
      //没有行，添加
      this.container.appendChild(rowDiv);
    } else {
      //有行，添加到一号子节点
      this.container.insertBefore(rowDiv, firstChild);
    }
  }

  // 界面移动事件
  move() {
    // 速度进行累加 变速
    this.top += this.speed;
    this.container.style.top = this.top + "px";
  }

   // 获取得分
   flash() {
    let score = document.querySelector(".score");
    score.innerHTML = this.sum;
    let res = document.querySelector(".goal");
    res.innerHTML = `分数:${this.sum}`;
  }

   // 游戏结束事件
   gameOver() {
    this.state = false;
    clearInterval(this.timer);
    const curtain_end = document.getElementById("curtain_end");
    curtain_end.style.display = "block";
  }

  // 判断游戏状态
  judge() {
    // 容器溢出后，创建行
    // 获取容器所有行
    let rowChilds = document.getElementsByClassName("row");
    this.lastRowChilds = rowChilds[rowChilds.length - 1];

    if (this.top >= 0) {
      // 到达底部自动生成块
      this.createRow();
      // 容器初始化
      this.top = -150;
      this.container.style.top = "-150px";
      // 在最后一行的所有块中进行遍历
      for (let i = 0; i < this.lastRowChilds.childNodes.length; i++) {
        // 游戏自动进行时，游戏的状态
        if (this.lastRowChilds.childNodes[i].className == "black") {
          this.gameOver();
        } else if (rowChilds.length == 6) {
          // 非开始游戏，容器中存在5行
          this.container.removeChild(this.lastRowChilds);
        }
      }
    }
    this.flash();
  }

  // 点击监听事件
  HandleClick() {
    let _this = this;
    this.container.addEventListener("click", (e) => {
      let tag = e.target;
      if (tag.className == "black") {
        _this.sum++;
        _this.speed += 0.4;
        tag.className = "block";
      } else {
        this.gameOver();
      }
    });
  }


  // 重新开始游戏
  again() {
    this.timer = null;
    this.state = false;
    this.speed = 2;
    this.sum = 2;
    this.top = -150;
    this.lastRowChilds = null;
    this.container.innerHTML = "";
    this.start();
  }
}
