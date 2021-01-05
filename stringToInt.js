function isNumber(ch) {
  const charCode = ch.charCodeAt(0)
  return (charCode > 47 && charCode < 58)
}

function toInt(str) {
  if (!str) throw new Error('No argument passed')
  if (typeof str !== 'string') throw new Error('Invalid input type')

  let value = 0
  const chars = str.split('')
  const isNegative = chars[0] === '-'

  for (let i = (isNegative ? 1 : 0); i < chars.length; i++) {
    if (isNumber(chars[i])) {
      value = (value * 10) + chars[i].charCodeAt(0) - 48
    } else break
  }

  return isNegative ? value * -1 : value

}

module.exports = toInt