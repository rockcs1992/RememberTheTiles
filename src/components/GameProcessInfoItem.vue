<template lang="html">
  <span class="game-process-info">
    <span>{{label}}</span>
    <span class="info-item">{{value}}</span>
  </span>
</template>

<script>
export default {
  name: 'GameProcessInfoItem',
  props: ['label', 'value']
}
</script>

<style lang="css">
.game-process-info {
  margin: 0 5px;
}

.info-item {
  border: 1px solid black;
  padding: 2px;
}
</style>
