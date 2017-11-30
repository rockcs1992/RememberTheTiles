import {
  ADD_STAGE_BY_ONE,
  RESTART_GAME,
  SUBTRACT_REMAINING_BOX_BY_ONE,
  SHOW_STAGE_PATTERN,
  HIDE_STAGE_PATTERN,
  ADD_SCORE,
  TO_GAME_VIEW,
  TO_MENU_VIEW
} from './mutation-types'

const mutations = {
  [RESTART_GAME] (state) {
    state.stageCount = 1
    state.boxCount = 3
    state.remainingBoxCount = 3
    state.initializing = true
    state.matrixCol = 3
    state.matrixRow = 3
    state.score = 0
  },
  [HIDE_STAGE_PATTERN] (state) {
    state.initializing = false
  },
  [SHOW_STAGE_PATTERN] (state) {
    state.initializing = true
  },
  [SUBTRACT_REMAINING_BOX_BY_ONE] (state) {
    state.remainingBoxCount--
  },
  [ADD_STAGE_BY_ONE] (state) {
    state.stageCount++
    state.boxCount++
    state.remainingBoxCount = state.boxCount
    if (state.stageCount % 2) {
      state.matrixCol++
    } else {
      state.matrixRow++
    }
    state.initializing = true
  },
  [ADD_SCORE] (state, scoreToAdd) {
    state.score += scoreToAdd
  },
  [TO_GAME_VIEW] (state) {
    state.gameState = 2
  },
  [TO_MENU_VIEW] (state) {
    state.gameState = 1
  }
}

export default mutations
