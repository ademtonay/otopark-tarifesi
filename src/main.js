import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});