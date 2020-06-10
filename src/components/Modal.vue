<template>
  <div class="sn-modal" role="dialog">
    <div class="sn-modal__wrapper">
      <div class="sn-modal__header">
        <slot name="modal-header"></slot>
        <div class="sn-modal__close" aria-role="button" @click.stop="close">x</div>
      </div>
      <div class="sn-modal__body">
        <slot></slot>
      </div>
      <div class="sn-modal__footer">
        <slot name="modal-footer">
          <BaseButton type="button" @click.stop="close">
            Close
          </BaseButton>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'Modal',
  components: {
    BaseButton
  },
  created: function () {
    this.$emit('open')
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.sn-modal {
  background: rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  &__wrapper {
    background-color: $color-white;
    margin: auto;
    min-width: 400px;
  }

  &__header,
  &__footer {
    padding: 12px;
  }

  &__header {
    align-items: center;
    display: flex;
    flex: 0 0 32px;
    text-align: center;
  }

  &__footer {
    text-align: right;
  }

  &__close {
    cursor: pointer;
    flex: 0;
    margin-left: auto;
  }

  &__body {
    padding: 12px;
    flex: 1;
  }

  &__close-btn {
    display: block;
    margin: 12px;
  }
}

</style>
