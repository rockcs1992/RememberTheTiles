import { generateInitializationBoxes } from '../utils'

const getters = {
  initialActiveBox (state) {
    return generateInitializationBoxes(state.matrixRow, state.matrixCol, state.boxCount)
  }
}

export default getters
