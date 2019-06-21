<script>
  export default {
    data() {
      return {
        value: [2,3],
        color: ['blue', 'green']
      }
    }, 
    methods: {
      color() {
        this.value.forEach(v => {
          // switch statement        
        }
      },
      consoleLog() {
        // eslint-disable-next-line no-console
        console.log("value: " + this.value);
      }
    }
  }
</script>

<template>
    <v-layout>
      <v-flex pa-5>
        <v-range-slider
          v-model.lazy="value"
          min="0"
          max="20"
          ticks
          tick-size="10"
          :color="color"
          always dirty
          @change="consoleLog"
        >
        </v-range-slider>
      </v-flex>
    </v-layout>
</template>

<style lang="scss" scoped>

</style>