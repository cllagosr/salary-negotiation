import fetchWeather from '@/shared/fetchWeather'

const weatherModule = {
  state: {
    temperature: '',
    pending: false,
    failed: false
  },
  mutations: {
    setErrorWeather (state) {
      state.pending = false
      state.failed = true
    },
    requestWeather (state) {
      state.pending = true
      state.failed = false
    },
    receiveWeather (state, { temperature }) {
      state.temperature = temperature
      state.pending = false
      state.failed = false
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
  }
}

export default weatherModule
