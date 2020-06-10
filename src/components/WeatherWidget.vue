<template>
  <section>
    <p>The weather in {{place}} is:
      <span v-if="showTemperature">{{temperature}}°C</span>
      <span v-if="isLoading">...</span>
      <span v-if="failed">Opps! something went wrong.</span>
    </p>
  </section>
</template>

<script>
export default {
  name: 'WeatherWidget',
  props: {
    place: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    failed: {
      type: Boolean,
      default: false
    },
    temperature: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    showTemperature () {
      return !(this.isLoading || this.failed)
    }
  }
}
</script>
