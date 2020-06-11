import Vue from 'vue'
import Vuex from 'vuex'
import salaryModule from '@/store/modules/salary'
import weatherModule from '@/store/modules/weather'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    salary: salaryModule,
    weather: weatherModule
  }
})
