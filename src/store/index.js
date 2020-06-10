import Vue from 'vue'
import Vuex from 'vuex'
import { roles } from '@/constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    salary: {
      [roles.EMPLOYER]: '',
      [roles.EMPLOYEE]: ''
    }
  },
  getters: {
    areSalariesFilled: (state) => {
      return !!(state.salary[roles.EMPLOYER] && state.salary[roles.EMPLOYEE])
    },
    getMatchText: (state) => {
      const employeeSalary = parseInt(state.salary[roles.EMPLOYEE])
      const employerSalary = parseInt(state.salary[roles.EMPLOYER])

      if (employeeSalary <= employerSalary) {
        return 'Success'
      }
      return 'Failure'
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
    }
  },
  actions: {
  },
  modules: {
  }
})
