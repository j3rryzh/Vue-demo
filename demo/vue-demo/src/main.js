import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
Vue.use(ElementUI);
// 引入国际化语言包
Vue.use(ElementUI, { locale });
import lottie from "vue-lottie";
Vue.component("lottie", lottie);
import "./utils/directive";

import { tips } from './utils/message.js'
Vue.prototype.$message = tips;


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
