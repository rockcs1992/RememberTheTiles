import {
  ADD_STAGE_BY_ONE,
  ADD_LEVEL_BY_ONE,
  SUBTRACT_LEVEL_BY_ONE,
  TOGGLE_ERROR,
  RESTART_GAME,
  SUBTRACT_REMAINING_BOX_BY_ONE,
  HIDE_STAGE_PATTERN,
  TO_GAME_VIEW,
  TO_MENU_VIEW,
  TO_SCOREBOARD_VIEW,
  SHOW_STAGE_PATTERN,
  ADD_SCORE,
  SET_MODAL_TYPE,
  SHOW_ACTIVE_COLOR,
  HIDE_ACTIVE_COLOR,
  ADD_SCORE_RECORD,
  START_STAGE_INITIALIZATION,
  END_STAGE_INITIALIZATION
} from './mutation-types'

const actions = {
  toNextStage ({ commit }, stageFailed) {
    if (stageFailed) {
      commit(SUBTRACT_LEVEL_BY_ONE)
    } else {
      commit(ADD_LEVEL_BY_ONE)
    }
    commit(ADD_STAGE_BY_ONE)
  },
  subtractRemainingBoxByOne ({ commit }) {
    commit(SUBTRACT_REMAINING_BOX_BY_ONE)
  },
  restartGame ({ commit }) {
    commit(RESTART_GAME)
  },
  showStagePattern ({ commit }) {
    commit(SHOW_STAGE_PATTERN)
  },
  hideStagePattern ({ commit }) {
    commit(HIDE_STAGE_PATTERN)
  },
  addScore ({ commit }, scoreToAdd) {
    commit(ADD_SCORE, scoreToAdd)
  },
  showModal ({ commit }, modalType) {
    commit(SET_MODAL_TYPE, modalType)
  },
  hideModal ({ commit }) {
    commit(SET_MODAL_TYPE, null)
  },
  showError ({ commit }) {
    commit(TOGGLE_ERROR, true)
  },
  hideError ({ commit }) {
    commit(TOGGLE_ERROR, false)
  },
  showActiveColor ({ commit }) {
    commit(SHOW_ACTIVE_COLOR)
  },
  hideActiveColor ({ commit }) {
    commit(HIDE_ACTIVE_COLOR)
  },
  startStageInitialization ({ commit }) {
    commit(START_STAGE_INITIALIZATION)
    commit(SHOW_STAGE_PATTERN)
    setTimeout(() => {
      commit(HIDE_STAGE_PATTERN)
      commit(END_STAGE_INITIALIZATION)
    }, 1500)
  },
  endStageInitialization ({ commit }) {
    commit(END_STAGE_INITIALIZATION)
  },
  addScoreRecord ({ commit }, record) {
    commit(ADD_SCORE_RECORD, record)
  },
  toGameView ({ commit }) {
    commit(TO_GAME_VIEW)
  },
  toMenuView ({ commit }) {
    commit(TO_MENU_VIEW)
  },
  toScoreBoardView ({ commit }) {
    commit(TO_SCOREBOARD_VIEW)
  }
}

export default actions
