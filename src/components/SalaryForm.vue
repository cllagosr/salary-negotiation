<template>
  <div>
    <form class="sn-form">
      <BaseInput @input="handleInput"
        :label="label"
        :valid="formError.isValid"
        v-model="salary"
        :error-message="formError.message"
      />
      <div class="sn-form__button">
        <BaseButton :disabled="!formError.isValid" @click="handleSubmit">
          Submit
        </BaseButton>
      </div>
    </form>
    <Modal v-if="showModal" @close="showModal=false"/>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import Modal from '@/components/Modal.vue'
import formValidation from '@/mixins/formValidation'

export default {
  name: 'SalaryForm',
  mixins: [formValidation],
  components: {
    BaseButton,
    BaseInput,
    Modal
  },
  props: {
    label: {
      type: String,
      default: 'Salary'
    }
  },
  data () {
    return {
      salary: '',
      showModal: false,
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
      this.showModal = true
      if (this.formError.isValid) {
        // value is ready
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
