import Vue from "vue";
import Router from "vue-router";
import DefaultPage from "../components/DefaultPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "DefaultPage",
      component: DefaultPage
    }
  ]
});
