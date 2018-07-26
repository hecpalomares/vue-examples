import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Vuex Tutorial',
    links: [ 
      {url: 'https://google.com', name: "Google"},
      {url: 'https://github.com', name: "Github"}, 
      {url: 'https://instagram.com', name: "Instagram"},
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      debugger;
      state.links.push(link)
    }
  },
  actions: {

  }
})
