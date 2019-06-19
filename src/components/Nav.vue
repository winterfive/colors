

<script>
  export default {
    data: () => ({
      color: '#8E00FF',
      hideCanvas: false,
      hideInputs: false,
      hideModeSwitch: false,
      mode: 'rgba',
      modes: ['rgba', 'hsla', 'hexa'],
      showSwatches: false,
    }),
  }
</script>

<template>
  <div>
    <v-color-picker class="e4"></v-color-picker>
  </div>
</template>

<style lang="scss" scoped>
.e4 {
width: 400px;
margin: auto;
}

</style>


