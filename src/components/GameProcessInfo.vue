<template lang="html">
  <div>
    <game-process-info-item label="STAGE" :value='stageCount' />
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
      stageCount: state => state.stageCount,
      tilesCount: state => state.boxCount,
      score: state => state.score
    })
  }
}
</script>

<style lang="css">
</style>
