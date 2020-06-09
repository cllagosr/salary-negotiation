<template>
  <div id="app">
    <div class="sn-nav">
      <router-link to="/">Employer</router-link> |
      <router-link to="/employee">Employee</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
