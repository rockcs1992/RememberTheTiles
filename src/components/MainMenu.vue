<template lang="html">
  <button @click="handleClick">Start Game</button>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$store.dispatch('toGameView')
    }
  }
}
</script>

<style lang="css">
</style>
