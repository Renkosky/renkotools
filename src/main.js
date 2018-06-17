// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from "vue";
import App from "./App";
import "font-awesome/css/font-awesome.css";
import renkotools from "./index";
Vue.use(renkotools);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
