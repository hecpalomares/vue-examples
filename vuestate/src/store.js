import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My VueJS Title',
    links: [
      'https://google.com',
      'https://github.com',
      'https://instagram.com'
    ]
  },
  mutations: {

  },
  actions: {

  }
})
