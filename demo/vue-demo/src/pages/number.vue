<template>
  <div class="container">
    <div class="content">
      <ScrollList
        v-for="(item, index) in numArr"
        :key="index"
        :item="item"
        :delay="index"
        class="nums"
      />
    </div>
  </div>
</template>

<script>
import ScrollList from "../components/scroll_list.vue";
export default {
  name: "App",
  components: { ScrollList },
  data() {
    return {
      amount: 892345
    };
  },
  computed: {
    numArr() {
      const str = String(this.amount);
      let options = [];
      for (let i = 0; i < str.length; i++) {
        options.push(parseInt(str[i]));
      }
      console.log(options)
      return options;
    }
  },
  mounted() {
    setInterval(() => this.amount++, 10000);
  }
};
</script>

<style>
.content {
  display: flex;
}
.nums {
  width: 70px;
  margin-right: 8px;
  border-radius: 5px;
  background-color: #2aabff;
}

.container {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
