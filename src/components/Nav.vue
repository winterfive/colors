<script>
  export default {
    data: () => ({
      colors: [
        { color:'Red', red: '255', green:'0', blue:'0'},
        { color: 'Red-Orange', red:'254', green:'97', blue:'1'},
        { color: 'Orange', value:'254,147,1'},
      ],
      rules: [
        v => v === 3
      ]
    }),
    computed: {
      color () {
        if (this.value < 100) return 'indigo'
        if (this.value < 125) return 'teal'
        if (this.value < 140) return 'green'
        if (this.value < 175) return 'orange'
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
          <template v-slot:thumb-label="props">
          </template>
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


