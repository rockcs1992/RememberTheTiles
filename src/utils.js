export const generateInitializationBoxes = (row, col, boxCount) => {
  const result = []
  while (boxCount--) {
    const m = Math.floor(Math.random() * row + 1)
    const n = Math.floor(Math.random() * col + 1)
    const boxCordinate = m * 10 + n
    if (!result.includes(boxCordinate)) {
      result.push(boxCordinate)
    } else {
      boxCount++
    }
  }
  return result
}
