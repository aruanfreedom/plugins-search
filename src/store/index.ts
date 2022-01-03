import Vue from "vue";
import Vuex from "vuex";
import { IPackage } from "@/types";

Vue.use(Vuex);

interface IState {
  packages: IPackage[];
  pages: IPackage[];
  searchWord: string;
}

export default new Vuex.Store({
  state: {
    packages: [],
    pages: [],
    searchWord: "",
  },
  mutations: {
    newPackages(state: IState, packages) {
      state.packages = [...packages];
    },
    foundPackages(state: IState, payload) {
      state.pages = [...payload.pages];
      state.searchWord = payload.searchWord;
    },
  },
  actions: {},
  modules: {},
});
