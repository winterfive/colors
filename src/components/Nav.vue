<script>
  export default {
    computed: {
      color () {
        if (this.tickValue === 1) return 'indigo'
        if (this.tickValue === 2) return 'teal'
        if (this.tickValue === 3) return 'green'
        if (this.tickValue === 4) return 'orange'
        return 'red'
      },
      tickValue: 0
  }
}
</script>

<template>
    <v-layout>
      <v-flex pa-5>
        <v-range-slider
          v-model="tickValue"
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


