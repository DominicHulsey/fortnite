import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import bootstrap from 'bootstrap'

Vue.use(Vuex)

let api = axios.create({
  baseURL: "https://fortnite-public-api.theapinetwork.com/prod09/challenges/get?season=current"
})

export default new Vuex.Store({
  state: {
    challenges: []
  },
  mutations: {
    setChallenges(state, data) {
      state.challenges = data
    }
  },
  actions: {
    getChallenges({ commit, dispatch }) {
      api.get('')
        .then(res => {
          console.log(res.data.challenges)
          commit('setChallenges', res.data.challenges)
        })
    }
  }
})
