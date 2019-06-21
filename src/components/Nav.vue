<script>
  export default {
  data() {
    return {
      colors: 'red'
    }
  },
  methods: {}
}
</script>

<template>
<v-container>
  <v-layout>
    <v-flex>
      <compact-picker v-model="colors" />
      <chrome-picker :value="colors" @input="updateValue"></chrome-picker>
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
</style>