import {
  ADD_STAGE_BY_ONE,
  ADD_LEVEL_BY_ONE,
  SUBTRACT_LEVEL_BY_ONE,
  TOGGLE_ERROR,
  RESTART_GAME,
  SUBTRACT_REMAINING_BOX_BY_ONE,
  SHOW_STAGE_PATTERN,
  HIDE_STAGE_PATTERN,
  ADD_SCORE,
  SET_MODAL_TYPE,
  SHOW_ACTIVE_COLOR,
  HIDE_ACTIVE_COLOR,
  START_STAGE_INITIALIZATION,
  END_STAGE_INITIALIZATION,
  ADD_SCORE_RECORD,
  TO_GAME_VIEW,
  TO_MENU_VIEW,
  TO_SCOREBOARD_VIEW
} from './mutation-types'

const mutations = {
  [RESTART_GAME] (state) {
    state.stageCount = 1
    state.levelCount = 1
    state.boxCount = 3
    state.remainingBoxCount = 3
    state.initializing = true
    state.matrixCol = 3
    state.matrixRow = 3
    state.score = 0
  },
  [HIDE_STAGE_PATTERN] (state) {
    state.showActiveColor = false
  },
  [SHOW_STAGE_PATTERN] (state) {
    state.showActiveColor = true
  },
  [START_STAGE_INITIALIZATION] (state) {
    state.initializing = true
  },
  [END_STAGE_INITIALIZATION] (state) {
    state.initializing = false
  },
  [SUBTRACT_REMAINING_BOX_BY_ONE] (state) {
    state.remainingBoxCount--
  },
  [ADD_STAGE_BY_ONE] (state) {
    state.stageCount++
    state.error = false
    state.initializing = true
  },
  [ADD_LEVEL_BY_ONE] (state) {
    state.levelCount++
    state.boxCount++
    state.remainingBoxCount = state.boxCount
    if (state.levelCount % 2) {
      state.matrixCol++
    } else {
      state.matrixRow++
    }
  },
  [SUBTRACT_LEVEL_BY_ONE] (state) {
    if (state.boxCount === 3) return
    state.levelCount--
    state.boxCount--
    state.remainingBoxCount = state.boxCount
    if (state.levelCount % 2) {
      state.matrixRow--
    } else {
      state.matrixCol--
    }
  },
  [ADD_SCORE] (state, scoreToAdd) {
    state.score += scoreToAdd
  },
  [SET_MODAL_TYPE] (state, modalType) {
    state.modalType = modalType
  },
  [SHOW_ACTIVE_COLOR] (state) {
    state.showActiveColor = true
  },
  [HIDE_ACTIVE_COLOR] (state) {
    state.showActiveColor = false
  },
  [TOGGLE_ERROR] (state, errorState) {
    state.error = errorState
  },
  [ADD_SCORE_RECORD] (state, record) {
    state.scoreRecord.push(record)
  },
  [TO_GAME_VIEW] (state) {
    state.gameState = 2
  },
  [TO_MENU_VIEW] (state) {
    state.gameState = 1
  },
  [TO_SCOREBOARD_VIEW] (state) {
    state.gameState = 3
  }
}

export default mutations
