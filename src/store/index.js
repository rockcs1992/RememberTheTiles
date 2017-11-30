import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  stageCount: 1,
  boxCount: 3,
  remainingBoxCount: 3,
  initializing: true,
  matrixRow: 3,
  matrixCol: 3,
  score: 0,
  gameState: 1
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
