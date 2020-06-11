<template>
  <div>
    <form class="sn-form">
      <BaseInput @input="handleInput"
        :label="label"
        :valid="formError.isValid"
        v-model="salaryInput"
        v-if="isInputVisible"
        :error-message="formError.message"
      />
      <div class="sn-form__button">
        <BaseButton :disabled="isButtonDisabled" @click="handleSubmit">
          Submit
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import formValidation from '@/mixins/formValidation'

export default {
  name: 'SalaryForm',
  mixins: [formValidation],
  components: {
    BaseButton,
    BaseInput
  },
  props: {
    label: {
      type: String,
      default: 'Salary'
    },
    role: {
      type: String,
      required: true
    }
  },
  computed: {
    isButtonDisabled: function () {
      return !this.formError.isValid || !this.isInputVisible
    },
    isInputVisible: function () {
      return !this.$store.state.salary[this.role]
    }
  },
  data () {
    return {
      salaryInput: '',
      formError: {
        isValid: false,
        message: ''
      }
    }
  },
  methods: {
    handleInput () {
      this.formError = this.verifyInput(['required', 'number'], this.salaryInput)
    },
    handleSubmit (event) {
      event.preventDefault()

      if (this.formError.isValid) {
        this.$store.commit('setSalary', { value: this.salaryInput, role: this.role })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.sn-form {
  max-width: 800px;
  margin: auto;
  &__button {
    text-align: end;
  }
}

</style>
