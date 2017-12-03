import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const gameState = {
  stageCount: 1,
  levelCount: 1,
  boxCount: 3,
  remainingBoxCount: 3,
  initializing: true,
  showActiveColor: true,
  matrixRow: 3,
  matrixCol: 3,
  score: 0,
  scoreRecord: [],
  modalType: null,
  error: false
}

export const initialState = {
  ...gameState,
  gameState: 1
}

export default new Vuex.Store({
  state: initialState,
  getters,
  mutations,
  actions
})
