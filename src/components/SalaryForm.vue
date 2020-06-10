<template>
  <div>
    <form class="sn-form">
      <BaseInput @input="handleInput"
        :label="label"
        :valid="formError.isValid"
        v-model="salary"
        v-show="showInput"
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
    showInput: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isButtonDisabled: function () {
      return !this.formError.isValid || this.showInput === false
    }
  },
  data () {
    return {
      salary: '',
      formError: {
        isValid: false,
        message: ''
      }
    }
  },
  methods: {
    handleInput () {
      this.formError = this.verifyInput(['required', 'number'], this.salary)
    },
    handleSubmit (event) {
      event.preventDefault()

      if (this.formError.isValid) {
        this.$emit('submit', this.salary)
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
