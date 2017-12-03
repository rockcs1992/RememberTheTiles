<template lang="html">
  <div class="main-menu">
    <menu-button @click="toGameView">Start Game</menu-button>
    <menu-button>Instructions</menu-button>
    <menu-button @click="toScoreBoardView">Score Board</menu-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MenuButton from './MenuButton'

export default {
  name: 'MainMenu',
  components: {
    MenuButton
  },
  methods: {
    ...mapActions(['toScoreBoardView', 'toGameView'])
  }
}
</script>

<style lang="css">
.main-menu {
  display: inline-block;
}
</style>
