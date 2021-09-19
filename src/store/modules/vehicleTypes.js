import Vue from "vue";
import store from "../index";

export default vehicle = {
  namespaced: true,
  state: {
    vehicles: [],
    error: ""
  },
  mutations: {
    setVehicles(state, payload) {
      state.vehicles = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  getters: {
    getVehicles(state) {
      return state.vehicles;
    },
    getError(state) {
      return state.error;
    }
  },
  actions: {
    getVehicleTypes({ commit }) {
      store.commit("setLoadingScreenStatus", true);
      const { API_URL, API_KEY } = process.env;

      Vue.http
        .get(API_URL + "/vehicles?key=" + API_KEY)
        .then(response => {
          console.log(response);
          store.commit("setLoadingScreenStatus", false);
        })
        .catch(err => {
          console.log(err);
          store.commit("setLoadingScreenStatus", false);
        });
    }
  }
};
