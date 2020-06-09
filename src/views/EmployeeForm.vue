<template>
  <main>
    <SalaryForm label="Minimum salary"/>
  </main>
</template>

<script>
import SalaryForm from '@/components/SalaryForm.vue'

export default {
  name: 'EmployerForm',
  components: {
    SalaryForm
  }
}
</script>
