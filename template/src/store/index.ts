// @ts-ignore
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { about } from "./modules/about";

// @ts-ignore
export default createStore({
  state: {
    label: "tester - 1.0"
  },
  getters: {},
  mutations: {},
  actions: {
    // @ts-ignore
    async doTest({ commit }) {
      console.log("doTest...", commit);
    },
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    async doArgs({ commit }, value) {
      console.log("value...", value);
    }
  },
  modules: {
    about
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      key: "temp",
      paths: ["about"]
    })
  ]
});
