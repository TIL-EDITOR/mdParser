
const rule = require('./rule.js')

exports.validate = function (normalizedData) {
  // newline rule 적용
  const regex=rule.newline
  return !regex.test(normalizedData)
}