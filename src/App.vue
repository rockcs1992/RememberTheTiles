<template>
  <div id="app">
    <custom-modal />
    <div v-if="gameState === 1">
      <main-menu />
    </div>
    <div v-else>
      <game-stage />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GameStage from './components/GameStage'
import MainMenu from './components/MainMenu'
import ScoreBoard from './components/ScoreBoard'
import CustomModal from './components/CustomModal'

export default {
  name: 'app',
  components: {
    GameStage,
    MainMenu,
    ScoreBoard,
    CustomModal
  },
  computed: mapState(['gameState'])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
