// 2. md 파일을 각 rule 대로 토큰화한다.
// 토큰화 기법 - 겹친 문제...

const validator = require("./normalizedValidator"); // 우리가 만들거임

exports.tokenizer = {
  tokenize(normalizedData) {
    // 1. normalized validator
    if (!validator.validate(normalizedData)) {
      return;
    }
    // 2. data -> array
    let arr = normalizedData.split("\n");
    // 3. 한 라인 문장을 한 토큰으로 합침
    return reduceToken(arr);
  },
};

function reduceToken(tokenArr) {
  const headTest = /^#/;
  const newLineTest = /\\$/;
  const result = [tokenArr[0]];

  for (let i = 1; i < tokenArr.length; i++) {
    let pre = result[result.length - 1];
    let next = tokenArr[i];
    if (
      !(headTest.test(pre) || newLineTest.test(pre)) &&
      !headTest.test(next)
    ) {
      result[result.length - 1] = pre + next;
    } else {
      result.push(next);
    }
  }
  console.log(result);
  return result;
}
