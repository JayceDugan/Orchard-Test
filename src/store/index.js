import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import news from './news'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    news: news
  }
})
