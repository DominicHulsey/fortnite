import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import bootstrap from 'bootstrap'

Vue.use(Vuex)

let challengeApi = axios.create({
  baseURL: "https://fortnite-public-api.theapinetwork.com/prod09/challenges/get?season=current"
})

let storeApi = axios.create({
  baseURL: "https://fortnite-public-api.theapinetwork.com/prod09/store/get"
})

let itemApi = axios.create({
  baseURL: "https://fortnite-public-api.theapinetwork.com/prod09/item"
})

export default new Vuex.Store({
  state: {
    challenges: [],
    storeItems: [],
    activeItem: {}
  },
  mutations: {
    setChallenges(state, data) {
      state.challenges = data
    },
    setStoreItems(state, data) {
      state.storeItems = data
    },
    setActiveItem(state, data) {
      state.activeItem = data
    }
  },
  actions: {
    getChallenges({ commit, dispatch }) {
      challengeApi.get('')
        .then(res => {
          console.log(res.data.challenges)
          commit('setChallenges', res.data.challenges)
        })
    },

    getStoreItems({ commit, dispatch }) {
      storeApi.get('')
        .then(res => {
          console.log(res.data.items)
          commit('setStoreItems', res.data.items)
        })
    },

    setActiveItem({ commit, dispatch }, itemId) {
      if (!itemId) return commit('setActiveItem', {})
      itemApi.get('get?ids=' + itemId)
        .then(res => {
          commit('setActiveItem', res.data)
          console.log(res.data)
        })
    }

  }
})
