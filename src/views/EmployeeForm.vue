<template>
  <main>
    <SalaryForm label="Minimum salary"
      @submit="handleSubmit"
      :show-input="!salary"
    />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import SalaryForm from '@/components/SalaryForm.vue'
import { roles } from '@/constants'

export default {
  name: 'EmployerForm',
  components: {
    SalaryForm
  },
  computed: mapState({
    salary: state => state.salary[roles.EMPLOYEE]
  }),
  methods: {
    handleSubmit (salary) {
      this.$store.commit('setSalary', { value: salary, role: 'employee' })
    }
  }
}
</script>
