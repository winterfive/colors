<script>
  export default {
    computed: {
      color () {
        if (this.value === 1) return 'indigo'
        if (this.value === 2) return 'teal'
        if (this.value === 3) return 'green'
        if (this.value === 4) return 'orange'
        return 'red'
      }
  }
  }
</script>

<template>
    <v-layout>
      <v-flex pa-5>
        <v-range-slider
          v-model="value"
          :rules = "rules"
          min="0"
          max="20"
          ticks
          tick-size="10"
          :color="color"
          always dirty
        >
        </v-range-slider>
      </v-flex>
    </v-layout>
</template>

<style lang="scss" scoped>
.e4 {
width: 400px;
margin: auto;
}

</style>


