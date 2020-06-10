<template>
  <div id="app">
    <div class="sn-nav">
      <router-link to="/">Employer</router-link> |
      <router-link to="/employee">Employee</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Modal v-if="$store.getters.areSalariesFilled" @close="handleClose">
      {{$store.getters.getMatchText}}!.
      Employer input: {{employerSalary}},
      employee input: {{employeeSalary}}
      <WeatherWidget place="London" temperature="17°C"/>
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '@/components/Modal.vue'
import WeatherWidget from '@/components/WeatherWidget.vue'
import { roles } from '@/constants'

export default {
  components: {
    Modal,
    WeatherWidget
  },
  computed: mapState({
    employerSalary: state => state.salary[roles.EMPLOYER],
    employeeSalary: state => state.salary[roles.EMPLOYEE]
  }),
  methods: {
    handleClose () {
      this.$store.commit('resetSalary')
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
