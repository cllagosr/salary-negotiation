import Vue from 'vue'
import Vuex from 'vuex'
import { roles } from '@/constants'
import fetchWeather from '@/shared/fetchWeather'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    salary: {
      [roles.EMPLOYER]: '',
      [roles.EMPLOYEE]: ''
    },
    weather: {
      temperature: '',
      pending: false,
      failed: false
    }
  },
  mutations: {
    setSalary (state, { value, role }) {
      state.salary = {
        ...state.salary,
        [role]: value
      }
    },
    resetSalary (state) {
      state.salary = {
        [roles.EMPLOYER]: '',
        [roles.EMPLOYEE]: ''
      }
    },
    setErrorWeather (state) {
      state.weather = { ...state.weather, pending: false, failed: true }
    },
    requestWeather (state) {
      state.weather = { ...state.weather, pending: true, failed: false }
    },
    receiveWeather (state, { temperature }) {
      state.weather = { temperature, pending: false, failed: false }
    }
  },
  actions: {
    async getWeather ({ commit }) {
      commit('requestWeather')
      try {
        const temperature = await fetchWeather()
        commit('receiveWeather', { temperature })
      } catch (e) {
        commit('setErrorWeather')
      }
    }
  },
  modules: {
  }
})
