import fakeNewsArticles from '@/lib/fake-content/news-articles.json';

export default {
  async init({ dispatch, commit }) {
    commit('STORE', await dispatch('fetch'))
  },
  async fetch({ commit }) {
    return new Promise((resolve) => {
      try {
        commit('SET_LOADING', true)
        commit('SET_FAILED_LOADING', false)

        setTimeout((fakeNewsArticles) => {
          commit('SET_LOADING', false)
          resolve(fakeNewsArticles)
        }, 3000, fakeNewsArticles)

      } catch (err) {
        console.error(err.message)
        commit('SET_LOADING', false)
        commit('SET_FAILED_LOADING', true)
        resolve(fakeNewsArticles)
      }
    })
  }
}
