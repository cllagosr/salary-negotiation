<template>
  <section>
    <p>The weather in {{place}} is {{temperature}}</p>
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
    temperature: {
      type: String,
      required: true
    }
  }
}
</script>
