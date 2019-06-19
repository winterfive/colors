<script>
  export default {
    data: () => ({
      colors: [
        { color:'Red', red: '255', green:'0', blue:'0'},
        { color: 'Red-Orange', red:'254', green:'97', blue:'1'},
        { color: 'Orange', value:'254,147,1'},

      ]
    }),

    methods: {
      season (val) {
        return this.icons[val]
      },
    },
  }
</script>

<template>
  <v-layout>
    <v-flex pa-5>
      <v-range-slider
        :tick-labels="colors"
        :value="[0, 1]"
        min="0"
        max="20"
        ticks="always"
        tick-size="4"
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


