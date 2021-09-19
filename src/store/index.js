import Vue from "vue";
import Vuex from "vuex";
import vehicle from "./modules/vehicleTypes";
import fee from "./modules/parkFees";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingScreenStatus: false,
    totalPrice: ""
  },
  mutations: {
    setLoadingScreenStatus(state, payload) {
      state.loadingScreenStatus = payload;
    },
    setTotalPrice(state, payload) {
      state.totalPrice = payload;
    }
  },
  getters: {
    getLoadingScreenStatus(state) {
      return state.loadingScreenStatus;
    },
    getTotalPrice(state) {
      return state.totalPrice;
    }
  },
  actions: {},
  modules: {
    vehicle,
    fee
  }
});
