import { generateInitializationBoxes } from '../utils'

const getters = {
  initialActiveBox (state) {
    return generateInitializationBoxes(state.matrixRow, state.matrixCol, state.boxCount, state.stageCount)
  },
  sortedRecords (state) {
    return state.scoreRecord.sort((a, b) => b.score - a.score)
  }
}

export default getters
