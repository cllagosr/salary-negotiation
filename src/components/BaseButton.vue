<template>
  <button class="sn-button"
    @click="handleClick"
    :type="type"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Basebutton',
  props: {
    type: {
      type: String,
      default: 'submit',
      validator: value => {
        return value.match(/(submit|button)/)
      }
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
.sn-button {
  background: $color-primary;
  border: 1px solid transparent;
  border-radius: 4px;
  color: $color-white;
  display: inline-block;
  font-size: 18px;
  line-height: 22px;
  padding: 8px 12px;
  opacity: 0.7;
  text-align: center;
  text-decoration: none;
  transition: all 0.19s ease;

  &:focus {
    outline: none;
    border: 2px solid $color-primary;
  }

  &:not([disabled]) {
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.24);
    cursor: pointer;
    opacity: 1;
  }

  &:not([disabled]):hover {
    box-shadow: none;
    text-decoration: none;
  }

  &:not([disabled]):active {
    box-shadow: none;
  }
}
</style>
