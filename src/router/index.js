import Vue from "vue";
import Router from "vue-router";
import DefaultPage from "../components/DefaultPage";
import PaymentPage from "../components/PaymentPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "DefaultPage",
      component: DefaultPage
    },
    {
      path: "/payment",
      name: "PaymentPage",
      component: PaymentPage
    }
  ]
});
