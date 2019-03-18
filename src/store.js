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

export default new Vuex.Store({
  state: {
    challenges: [],
    storeItems: []
  },
  mutations: {
    setChallenges(state, data) {
      state.challenges = data
    },
    setStoreItems(state, data) {
      state.storeItems = data
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
    }
  }
})
