import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import Notification from "./components/common/Notification";
import LoadingScreen from "./components/common/LoadingScreen";

Vue.use(VueResource);

Vue.component("app-notification", Notification);

Vue.component("app-loading-screen", LoadingScreen);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
