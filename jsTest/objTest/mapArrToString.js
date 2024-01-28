const mapArrToString = (arr) => {
  if(!arr) return []
  return arr
    .filter(i => {
      return Number.isInteger(i)
    })
    .map(i => {
      return String(i)
    })
}

module.exports = mapArrToString;