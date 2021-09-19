import Vue from "vue";
import Router from "vue-router";
import CardContainer from "../components/common/CardContainer";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "CardContainer",
      component: CardContainer
    }
  ]
});
