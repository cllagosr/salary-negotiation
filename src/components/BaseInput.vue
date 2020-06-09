<template>
  <div class="sn-input">
    <label class="sn-input__label">{{ label }}</label>
    <input :type="type"
          v-bind="$attrs"
          :value="currentValue"
          :placeholder="placeholder"
          @input="handleInput"
          class="sn-input__input" />
    <div v-if="!valid" class="sn-input__invalid">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator: value => {
        return value.match(/(text|email|number|tel)/)
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      required: true
    },
    valid: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value || ''
    }
  },
  methods: {
    setCurrentValue (value) {
      if (value === this.currentValue) {
        return
      }

      this.currentValue = value
    },
    handleInput (event) {
      const inputValue = event.target.value
      this.$emit('input', inputValue)
      this.setCurrentValue(inputValue)
    }
  }
}
</script>

<style scoped lang="scss">
.sn-input {
  width: 100%;
  float: left;
  margin-bottom: 20px;
  position: relative;

  &__input {
    border: 1px solid $border-color;
    border-image: initial;
    border-radius: 4px;
    box-sizing: border-box;
    color: $font-color;
    cursor: auto;
    display: block;
    float: left;
    font-size: 14px;
    outline: none;
    padding: 10px 12px;
    width: 100%;
  }

  &__label {
    width: 100%;
    float: left;
    margin-bottom: 10px;
    font-weight: 600;
  }

  &__invalid {
    bottom: -24px;
    color: $color-status-red;
    float: left;
    font-size: 14px;
    margin-top: 4px;
    position: absolute;
    width: 100%;
  }
}
</style>
