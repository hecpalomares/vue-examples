import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // Property 'state' that contains the properties
  state: {
    flavor: ''
  },
  // The state cannot be manipulated except by using mutations.
  mutations: {
    changeFlavor(state, flavor) {
      state.flavor = flavor;
    }
  },
  getters: {
    flavor: state => state.flavor // getters is an object, flavor is a property of this object, accepts state as the parameter and returns flavor property of the state
  }
});