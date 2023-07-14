<template>
  <div>
    <div class="search">
      <input
        type="text"
        class="s_input"
        v-model="keyword"
        placeholder="请输入歌曲名称"
      />
      <!-- @input="handleInput" -->
      <div class="list_box">
        <div v-for="item in filSongs" :key="item.id">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      searchList: [
        {
          id: 101,
          name: "最伟大的作品"
        },
        {
          id: 102,
          name: "最伟大的鸡"
        },
        {
          id: 103,
          name: "最伟大的demo"
        },
        {
          id: 104,
          name: "黄金时代"
        },
        {
          id: 105,
          name: "黄梅戏"
        },
        {
          id: 106,
          name: "梦伴"
        },
        {
          id: 107,
          name: "四季"
        },
        {
          id: 108,
          name: "Closer"
        },
        {
          id: 109,
          name: "So far away"
        },
        {
          id: 110,
          name: "someone you loved"
        }
      ],
      searchList1: [
        "最伟大的作品",
        "最伟大的鸡",
        "最伟大的demo",
        "黄金时代",
        "黄梅戏",
        "梦伴",
        "四季",
        "Closer",
        "So far away",
        "someone you loved"
      ]
    };
  },
  computed: {
    filSongs() {
      return this.searchList.filter(item => {
        //返回过滤后的数组
        return (
          item.name.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
        );
      }); //filter是过滤函数去除了不包含关键字的情况
    }
  },
  methods: {
    handleInput() {
      console.log(this.keyword);
      this.searchList = this.searchList.filter(item =>
        item.name.includes(this.keyword)
      ); //筛选出来包含输入框值的元素
      //然后赋值给原数组，因为filter不会改变原数组，所以要用赋值的办法使得原数组改变，进而改变dom
    }
  }
};
</script>

<style>
.s_input {
  width: 25vw;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  outline: none;
  border: solid rgb(97, 140, 233) 1px;
  padding-left: 10px;
}

.list_box {
  width: 25vw;
  margin: 0 auto;
  padding: 10px;
  line-height: 25px;
  border-radius: 8px;
  box-shadow: 2px 2px 7px #f0f0f0, -2px -2px 7px #f0f0f0;
  margin-top: 10px;
}

.list_box div {
  text-align: left;
}
</style>
