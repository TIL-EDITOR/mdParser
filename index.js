// // 0. 라이브러리를 시행한다.
import normalizer from "./src/normalizer.js";
import tokenizer from "./src/tokenizer.js";

export default {
  do(data) {
    const normalizedData = normalizer.normalize(data);
    tokenizer.tokenize(normalizedData);
    return normalizedData;
  },
};
