<template>
  <main>
    <SalaryForm label="Maximum salary"/>
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
