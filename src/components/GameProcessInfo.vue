<template lang="html">
  <div>
    <game-process-info-item label="LEVEL" :value='levelCount' />
    <game-process-info-item label="TILES" :value='tilesCount' />
    <game-process-info-item label="SCORE" :value='score' />
  </div>
</template>

<script>
import GameProcessInfoItem from './GameProcessInfoItem'
import { mapState } from 'vuex'

export default {
  name: 'GameProcessInfo',
  components: {
    GameProcessInfoItem
  },
  computed: {
    ...mapState({
      levelCount: state => state.stageCount,
      tilesCount: state => state.boxCount,
      score: state => state.score
    })
  }
}
</script>

<style lang="css">
</style>
