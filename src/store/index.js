import Vue from "vue";
import Vuex from "vuex";
import vehicle from "./modules/vehicleTypes";
import fee from "./modules/parkFees";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingScreenStatus: false
  },
  mutations: {
    setLoadingScreenStatus(state, payload) {
      state.loadingScreenStatus = payload;
    }
  },
  getters: {
    getLoadingScreenStatus(state) {
      return state.loadingScreenStatus;
    }
  },
  actions: {},
  modules: {
    vehicle,
    fee
  }
});
