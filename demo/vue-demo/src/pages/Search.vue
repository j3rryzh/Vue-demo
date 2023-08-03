<template>
  <div class="content">
    <el-dialog
      title="提示"
      v-dialogDrag
      v-dialogChange
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
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
      searchList1: [],
      timer: null
    };
  },
  computed: {
    filSongs() {
      return this.searchList.filter(item => {
        return (
          item.name.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
        );
      });
    }
  },

  watch: {
    keyword: {
      immediate: true,
      handler(val) {
        if (this.timer !== null) clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.searchList1 = this.searchList.filter(item => {
            return item.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
          });
        }, 100);
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
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
