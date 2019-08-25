import Vuex from "vuex";
import Vue from "vue";
import billgroup from "./modules/billgroup";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    billgroup
  }
});
