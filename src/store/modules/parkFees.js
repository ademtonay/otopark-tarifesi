import Vue from "vue";
import store from "../";

const parkFee = {
  namespaced: true,
  state: {
    parkFees: [],
    error: ""
  },
  mutations: {
    setParkFees(state, payload) {
      state.parkFees = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  getters: {
    getParkFees(state) {
      return state.parkFees;
    },
    getError(state) {
      return state.error;
    }
  },
  actions: {
    getParkFees({ commit }) {
      store.commit("setLoadingScreenStatus", true);
      const { API_URL, API_KEY } = process.env;

      Vue.http
        .get(API_URL + "/fees?key=" + API_KEY)
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

export default parkFee;
