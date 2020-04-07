import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/interfaces/RootState";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    count: 0,
    price: 100,
    tasks: []
  },
  getters,
  mutations,
  actions
};

export default new Vuex.Store<RootState>(store);
