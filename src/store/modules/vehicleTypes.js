import Vue from "vue";
import store from "../index";

const vehicle = {
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

      return Vue.http
        .get(API_URL + "/vehicles?key=" + API_KEY)
        .then(response => {
          commit("setVehicles", response.data.data);
          store.commit("setLoadingScreenStatus", false);
        })
        .catch(err => {
          commit("setError", err);
          store.commit("setLoadingScreenStatus", false);
        });
    }
  }
};

export default vehicle;
