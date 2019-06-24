<script>

var colors = '#194d33'

  export default {
  data() {
    return {
      colors
    }
  },
  methods: {}
}
</script>

<template>
<v-container>
  <v-layout>
    <v-flex>
      <compact-picker v-model="colors" class="picker" />
      <div>
        <v-btn color="success">Success</v-btn>
        <v-btn color="error">Error</v-btn>
        <v-btn color="warning">Warning</v-btn>
        <v-btn color="info">Info</v-btn>
      </div>
    </v-flex>
  </v-layout>
</v-container>
  
</template>

<style lang="scss" scoped>

.picker {
  width: 500px;
}
</style>