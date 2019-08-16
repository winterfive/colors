<template>
  <v-app>
    <v-content>
      <Nav/>
      <Squares/>
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
import Squares from './components/Squares'

export default {
  name: 'App',
  components: {
    Nav,
    Squares
  },
  data () {
    return {
      //
    }
  }
}
</script>
