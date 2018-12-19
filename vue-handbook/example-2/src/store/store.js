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
    change(state, flavor) {
      state.flavor = flavor;
    }
  },
  getter: {
    flavor: state => state.flavor // getter is an object, flavor is a property of this object, accepts state as the parameter and returns flavor property of the state
  }
});