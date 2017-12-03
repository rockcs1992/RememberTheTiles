<template lang="html">
  <div>
    <div v-if="bonusPoints">Bonus Points: {{bonusPoints}}</div>
    <div>Tiles in Next Stage: {{tilesInNext}}</div>
    <button class="modal-default-button" @click="closeModal">OK</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'StageBonusModal',
  props: ['error', 'currentLevel', 'currentTiles'],
  computed: {
    bonusPoints () {
      return this.error ? 0 : 5 * Math.pow(2, this.currentLevel - 1)
    },
    tilesInNext () {
      return this.error ? this.currentTiles - 1 : this.currentTiles + 1
    },
    ...mapState({
      stageCount: state => state.stageCount
    })
  },
  methods: {
    closeModal () {
      this.$store.dispatch('hideModal')
      if (this.stageCount === 10) {
        this.$store.dispatch('showModal', 'gameOver')
      } else {
        this.$store.dispatch('toNextStage', this.error)
        this.$store.dispatch('startStageInitialization')
      }
    }
  }
}
</script>

<style lang="css">

</style>
