<template lang="html">
  <div :class="{box: true, active: isActive, incorrect: notMatch}" @click="handleClick">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TileUnit',
  props: ['id', 'initialized'],
  data () {
    return {
      clicked: false,
      alreadyCounted: false,
      notMatch: false
    }
  },
  computed: {
    ...mapState({
      initializing: state => state.initializing,
      remainingBoxCount: state => state.remainingBoxCount,
      stageCount: state => state.stageCount,
      isActive (state) {
        return state.initializing ? this.initialized : this.clicked
      }
    })
  },
  methods: {
    handleClick () {
      const { initialized, alreadyCounted, remainingBoxCount, stageCount } = this
      if (initialized) {
        this.clicked = true
        if (!alreadyCounted) {
          if (remainingBoxCount !== 1) {
            this.$store.dispatch('addScore', 10)
          } else if (remainingBoxCount === 1) {
            this.$store.dispatch('addScore', 5 * Math.pow(2, stageCount - 1) + 10)
          }
          this.$store.dispatch('subtractRemainingBoxByOne')
          this.alreadyCounted = true
        }
      } else {
        this.clicked = false
        this.alreadyCounted = false
        this.notMatch = true
        this.$store.dispatch('showStagePattern')
        this.$store.dispatch('toMenuView')
        this.$store.dispatch('restartGame')
        alert('Game Over')
      }
    },
    resetBox () {
      this.clicked = false
      this.alreadyCounted = false
      this.notMatch = false
    }
  },
  watch: {
    initializing (val) {
      if (val) {
        this.resetBox()
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .box {
    width: 50px;
    height: 50px;
    background-color: #f1d48f;
    color: black;
  }

  .active {
    background-color: red;
  }

  .incorrect {
    background-color: black;
  }
</style>
