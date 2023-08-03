<template>
  <div class="container">
    <div class="content">
      <scroll-list
        v-for="(item, index) of numArr"
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
      amount: 889343
    };
  },
  computed: {
    numArr() {
      const str = String(this.amount);
      // const str = String(Number.parseFloat(this.amount).toFixed(2));
      let options = [];
      for (let i = 0; i < str.length; i++) {
        options.push(parseInt(str[i]));
      }

      options = [0, 0, 0, 0].concat(options);
      return options;
    }
  },
  mounted() {
    setInterval(
      () => (this.amount = this.amount + Math.floor(Math.random() * 200000)),
      10000
    );
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
