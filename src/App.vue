<template>
  <div id="app">
    <Navigation />

    <router-view
      class="container"
    />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
$danger: #ffffff;
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  border-bottom: 1px solid #cdcdcd;

  a {
    font-weight: bold;
    color: #2c3e50 !important;

    &.router-link-exact-active {
      color: #42b983 !important;
    }
  }

  a:hover {
    color: #42b983 !important;
  }
} 
</style>
