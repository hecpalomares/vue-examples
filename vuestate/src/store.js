import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Vuex Tutorial',
    msg: '',
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
  // Calling mutations directly in the component is for synchronous events.
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, linkIndex) => {
      state.msg = `${state.links[linkIndex].name} was deleted`
      state.links.splice(linkIndex, 1);
    },
    REMOVE_ALL: (state) => {
      state.links = []
      state.msg = "All links were deleated via 'Remove all links' button after 1.5 seconds"
    }
  },
  // Calling actions is for asyncronous events
  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link)
    },
    removeAll ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500);
      }); 
    } 
  }
})
