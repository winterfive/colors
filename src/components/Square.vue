<template>
  <div>
    <div class="square"></div>
    </div>  
</template>

<script>
export default {
  // get selected colors from store and apply to square
}
</script>

<style lang="scss" scoped>

  .square {
  width: 10%;
  background-color: red;
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
  margin: 2px;
}
</style>
