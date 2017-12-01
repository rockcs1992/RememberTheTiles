<template lang="html">
  <div>
    <div v-if="bonusPoints">Bonus Points: {{bonusPoints}}</div>
    <div>Tiles in Next Stage: {{tilesInNext}}</div>
  </div>
</template>

<script>
export default {
  name: 'CustomModalBody',
  props: ['error', 'currentLevel', 'currentTiles'],
  computed: {
    bonusPoints () {
      return this.error ? 0 : 5 * Math.pow(2, this.currentLevel - 1)
    },
    tilesInNext () {
      return this.error ? this.currentTiles - 1 : this.currentTiles + 1
    }
  }
}
</script>

<style lang="css">

</style>
