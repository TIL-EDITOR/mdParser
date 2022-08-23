import { normalizationRule } from "./rule.js";

export default {
  validate(normalizedData) {
    // newline rule 적용
    const regex = normalizationRule.newline;
    return !regex.test(normalizedData);
  },
};
