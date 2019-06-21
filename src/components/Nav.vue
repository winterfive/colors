<script>
  export default {
    computed: {
      colors: function() {
        this.tickValues.forEach(v => {
        if(v === 0) return 'blue'
        if(v === 1) return 'green'
        if(v === 2) return 'yellow'
        if(v === 3) return 'black'
        if(v === 4) return 'purple'
        
      })
      return 'red'
      }      
    },
  data() {
    return {
      tickValues: [0,1],
      colors: ['blue', 'green']
      // Can colors be an array? Do I need to use 2 different sliders?
    }
  },
  methods: {
    setColor() {
      // eslint-disable-next-line no-console
      console.log("colors: " + this.colors[0] + this.colors[1]);
      // eslint-disable-next-line no-console
      console.log("tickValue is: " + this.tickValues)

      this.tickValues.forEach(v => {
        if(v === 0) return 'blue'
        if(v === 1) this.colors[v.index] = 'green'
        if(v === 2) this.colors[v.index] = 'yellow'
        if(v === 3) this.colors[v.index] = 'black'
        if(v === 4) this.colors[v.index] = 'purple'
      })
    }
  }
}
</script>

<template>
    <v-layout>
      <v-flex pa-5>
        <v-range-slider
          v-model="tickValues"
          min="0"
          max="20"
          ticks
          tick-size="10"
          :color="blue"
          always dirty
          @change="setColor"
        >
        </v-range-slider>
      </v-flex>
    </v-layout>
</template>

<style lang="scss" scoped>
</style>