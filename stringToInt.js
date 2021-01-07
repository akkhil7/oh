function isNumber(ch) {
  return ch * 1 > -1
}

function toInt(str) {
  if (!str) throw new Error('No argument passed')
  if (typeof str !== 'string') throw new Error('Invalid input type')

  let value = 0
  const isNegative = str[0] === '-'

  for (let i = (isNegative ? 1 : 0); i < str.length; i++) {
    if (isNumber(str[i])) {
      value = (value * 10) + str[i] * 1
    } else break
  }

  return isNegative ? value * -1 : value

}

module.exports = toInt