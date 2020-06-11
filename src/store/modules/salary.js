import { roles } from '@/constants'

const salaryModule = {
  nameSpaced: true,
  state: {
    [roles.EMPLOYER]: '',
    [roles.EMPLOYEE]: ''
  },
  mutations: {
    setSalary (state, { value, role }) {
      state[role] = value
    },
    resetSalary (state) {
      state[roles.EMPLOYER] = ''
      state[roles.EMPLOYEE] = ''
    }
  }
}

export default salaryModule
