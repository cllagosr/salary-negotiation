export default {
  methods: {
    verifyInput (rules, value) {
      const isNumberRegx = /^\d+$/u
      let message = ''
      const isValid = false

      if (rules.includes('required') && !value) {
        message = 'This field is required'
        return { isValid, message }
      }

      if (rules.includes('number') && !isNumberRegx.test(value)) {
        message = 'This field accepts only numbers'
        return { isValid, message }
      }

      return { isValid: true, message }
    }
  }
}
