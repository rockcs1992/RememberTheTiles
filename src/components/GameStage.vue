<template lang="html">
  <div>
    <game-process-info />
    <tile-matrix />
  </div>
</template>

<script>
import TileMatrix from './TileMatrix'
import GameProcessInfo from './GameProcessInfo'

export default {
  name: 'GameStage',
  components: {
    TileMatrix,
    GameProcessInfo
  },
  created () {
    this.$store.dispatch('restartGame')
    setTimeout(() => {
      this.$store.dispatch('hideStagePattern')
      this.$store.dispatch('endStageInitialization')
    }, 1500)
  }
}
</script>

<style lang="css">
</style>
