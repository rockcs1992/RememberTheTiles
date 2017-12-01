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
  SHOW_STAGE_PATTERN,
  ADD_SCORE,
  SHOW_MODAL,
  HIDE_MODAL,
  SHOW_ACTIVE_COLOR,
  HIDE_ACTIVE_COLOR,
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
    commit(SHOW_STAGE_PATTERN)
    commit(START_STAGE_INITIALIZATION)
    setTimeout(() => {
      commit(HIDE_STAGE_PATTERN)
      commit(END_STAGE_INITIALIZATION)
    }, 1500)
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
  showModal ({ commit }) {
    commit(SHOW_MODAL)
  },
  hideModal ({ commit }) {
    commit(HIDE_MODAL)
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
  },
  endStageInitialization ({ commit }) {
    commit(END_STAGE_INITIALIZATION)
  },
  toGameView ({ commit }) {
    commit(TO_GAME_VIEW)
  },
  toMenuView ({ commit }) {
    commit(TO_MENU_VIEW)
  }
}

export default actions
