<template lang="html">
  <div>
    <game-process-info />
    <tile-matrix />
  </div>
</template>

<script>
import TileMatrix from './TileMatrix'
import GameProcessInfo from './GameProcessInfo'
import { mapState } from 'vuex'

export default {
  name: 'GameStage',
  components: {
    TileMatrix,
    GameProcessInfo
  },
  created () {
    setTimeout(() => {
      this.$store.dispatch('hideStagePattern')
    }, 1500)
  },
  computed: mapState(['remainingBoxCount']),
  watch: {
    remainingBoxCount (val) {
      if (!val) {
        this.$store.dispatch('toNextStage')
      }
    }
  }
}
</script>

<style lang="css">
</style>
