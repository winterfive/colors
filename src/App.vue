<template>
  <v-app>
    <v-content>
      <Nav/>
      <Square/>
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
import Square from './components/Square'

export default {
  name: 'App',
  components: {
    Nav,
    Square
  },
  data () {
    return {
      //
    }
  }
}
</script>
