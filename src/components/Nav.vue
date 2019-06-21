<script>
  export default {
    computed: {
      color () {
        this.value.forEach(v => {
          if (v === 1) return 'indigo'
          if (v === 2) return 'teal'
          if (v === 3) return 'green'
          if (v === 4) return 'orange'
          return 'red';         
        }        
      },
    },
    methods: {
      consoleLog() {
        // eslint-disable-next-line no-console
        console.log("value: " + this.value);
      }
    },
    data() {
      return {
        value: [2,3]
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


