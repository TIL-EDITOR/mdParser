// 0. 라이브러리를 시행한다.
const normalizer = require('./src/normalizer')

exports.toJson = {
    do(data) {
        const normalizedData = normalizer.normalize(data)
        return normalizedData
    }
}