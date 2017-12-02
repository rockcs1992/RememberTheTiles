<template lang="html">
  <div
    :class="{box: true, active: isActive, incorrect: notMatch}"
    @click="handleClick"
  >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TileUnit',
  props: ['initialized'],
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
      showActiveColor: state => state.showActiveColor,
      remainingBoxCount: state => state.remainingBoxCount,
      levelCount: state => state.levelCount,
      isActive (state) {
        return state.initializing || state.showActiveColor ? this.initialized : this.clicked
      }
    })
  },
  methods: {
    handleCorrectTileClick () {
      const { alreadyCounted, remainingBoxCount, levelCount } = this
      this.clicked = true
      if (!alreadyCounted) {
        if (remainingBoxCount !== 1) {
          this.$store.dispatch('addScore', 10)
        } else if (remainingBoxCount === 1) {
          this.$store.dispatch('addScore', 5 * Math.pow(2, levelCount - 1) + 10)
        }
        this.alreadyCounted = true
        this.$store.dispatch('subtractRemainingBoxByOne')
        if (!this.remainingBoxCount) {
          this.$store.dispatch('showModal')
        }
      }
    },
    handleIncorrectTileClick () {
      this.clicked = false
      this.alreadyCounted = false
      this.notMatch = true
      this.$store.dispatch('showError')
      this.$store.dispatch('showActiveColor')
      this.$store.dispatch('showModal')
    },
    handleClick () {
      const { initialized, initializing } = this
      if (!initializing) {
        if (initialized) {
          this.handleCorrectTileClick()
        } else {
          this.handleIncorrectTileClick()
        }
      }
    },
    resetTile () {
      this.clicked = false
      this.alreadyCounted = false
      this.notMatch = false
    }
  },
  watch: {
    initializing (val) {
      if (val) {
        this.resetTile()
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
