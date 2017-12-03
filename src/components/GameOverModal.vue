<template lang="html">
  <div>
    <h4>Game Over!</h4>
    <p>Your score: {{score}}</p>
    <small-button class="modal-default-button" @click="onModalClose">OK</small-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SmallButton from './SmallButton'

export default {
  name: 'GameOverModal',
  components: {
    SmallButton
  },
  computed: {
    ...mapState(['score', 'levelCount'])
  },
  methods: {
    onModalClose () {
      const scoreRecord = {
        score: this.score,
        maxLevel: this.levelCount,
        date: new Date().toLocaleDateString()
      }
      this.$store.dispatch('hideModal')
      this.$store.dispatch('toScoreBoardView')
      this.$store.dispatch('addScoreRecord', scoreRecord)
    }
  }
}
</script>

<style lang="css">

</style>
