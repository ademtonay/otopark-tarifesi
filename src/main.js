import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import Notification from "./components/common/Notification";

Vue.use(VueResource);
Vue.component("app-notification", Notification);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
