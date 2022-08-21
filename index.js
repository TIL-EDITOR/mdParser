// 0. 라이브러리를 시행한다.
const normalizer = require('./src/normalizer')
const {tokenizer} = require('./src/tokenizer')
exports.toJson = {
    do(data) {
        const normalizedData = normalizer.normalize(data)
        tokenizer.tokenize(normalizedData)
        return normalizedData
    }
}