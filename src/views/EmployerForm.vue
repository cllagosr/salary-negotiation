<template>
  <main>
    <SalaryForm label="Maximum salary"
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
    salary: state => state.salary[roles.EMPLOYER]
  }),
  methods: {
    handleSubmit (salary) {
      this.$store.commit('setSalary', { value: salary, role: 'employer' })
    }
  }
}
</script>
