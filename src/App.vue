<template>
  <div id="app">
    <div class="sn-nav">
      <router-link to="/">Employer</router-link> |
      <router-link to="/employee">Employee</router-link>
    </div>
    <keep-alive>
      <router-view :key="$route.path"/>
    </keep-alive>
    <Modal v-if="areSalariesFilled"
      @close="handleModalClose"
      @open="handleModalOpen"
    >
      {{getMatchText}}!.
      Employer input: {{employerSalary}},
      employee input: {{employeeSalary}}
      <WeatherWidget place="London"
        :isLoading="weather.pending"
        :failed="weather.failed"
        :temperature="weather.temperature"/>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Modal from '@/components/Modal.vue'
import WeatherWidget from '@/components/WeatherWidget.vue'
import { roles } from '@/constants'

export default {
  components: {
    Modal,
    WeatherWidget
  },
  computed: {
    ...mapState({
      weather: 'weather',
      employerSalary: state => state.salary[roles.EMPLOYER],
      employeeSalary: state => state.salary[roles.EMPLOYEE]
    }),
    areSalariesFilled () {
      return !!(this.employerSalary && this.employeeSalary)
    },
    getMatchText () {
      const employerSalary = parseInt(this.employerSalary)
      const employeeSalary = parseInt(this.employeeSalary)

      if (employeeSalary <= employerSalary) {
        return 'Success'
      }
      return 'Failure'
    }
  },
  methods: {
    ...mapMutations(['resetSalary']),
    ...mapActions(['getWeather']),
    handleModalClose () {
      this.resetSalary()
    },
    handleModalOpen () {
      this.getWeather()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.sn-nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: $color-grey;

    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}
</style>
