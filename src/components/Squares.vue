<template>
  <v-container fluid>
    <span v-for="i in 10" :key="i"><Square/></span>
  </v-container>    
</template>

<script>
import Square from "./Square.vue";

export default {
  components: {
    Square
  }    
}
</script>

<style lang="scss" scoped>

</style>