import {
  ADD_STAGE_BY_ONE,
  RESTART_GAME,
  SUBTRACT_REMAINING_BOX_BY_ONE,
  HIDE_STAGE_PATTERN,
  TO_GAME_VIEW,
  TO_MENU_VIEW,
  SHOW_STAGE_PATTERN,
  ADD_SCORE
} from './mutation-types'

const actions = {
  toNextStage ({ commit }) {
    commit(ADD_STAGE_BY_ONE)
    setTimeout(() => {
      commit(HIDE_STAGE_PATTERN)
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
  toGameView ({ commit }) {
    commit(TO_GAME_VIEW)
  },
  toMenuView ({ commit }) {
    commit(TO_MENU_VIEW)
  }
}

export default actions
