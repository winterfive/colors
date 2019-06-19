<template>
  <div id="app">
    <nav-bar/>
    <Square/><Square/>
  </div>
</template>

<script>
import Square from './components/Square.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Square
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blue;
  margin-top: 60px;
}
</style>
