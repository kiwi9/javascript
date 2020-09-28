import Vue from "vue";
import App from "./App.vue";
import "./mock/mock";
import axios from "axios";

axios.defaults.baseURL = "http://test.com/api";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
