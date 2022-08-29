import { TestTemplate, test } from "./test.js";
import { normalizationRule, headingRule } from "../src/rule.js";

// head1 테스트
const head1TestSet = [
  new TestTemplate("head1 rule success test", "# heading1", true),
  new TestTemplate("head1 rule fail test", "## not heading1", false),
  new TestTemplate("head1 rule fail test 2", "#not heading1", false),
];
const head1TestFun = (arg) => {
  return headingRule.head1.test(arg);
};
head1TestSet.forEach((element) => {
  test(element, head1TestFun);
});

// head2 테스트
const head2TestSet = [
  new TestTemplate("head2 rule success test", "## heading1", true),
  new TestTemplate("head2 rule fail test", "# not heading1", false),
  new TestTemplate("head2 rule fail test 2", "##not heading1", false),
];
const head2TestFun = (arg) => {
  return headingRule.head2.test(arg);
};
head2TestSet.forEach((element) => {
  test(element, head2TestFun);
});
