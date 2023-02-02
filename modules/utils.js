export const sumBy = (arr, attr) => {
  return arr.reduce((prev, curr) => {
    return prev + curr[attr]
  }, 0)
}
