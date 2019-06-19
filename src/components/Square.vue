<template>
  <div>
    <div class="square" color="blue"></div>
    </div>  
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

  .square {
  width: 50%;
  background-color: red;
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>
