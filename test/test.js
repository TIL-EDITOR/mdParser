class TestTemplate {
  constructor(desc, src, dest) {
    this.desc = desc;
    this.src = src;
    this.dest = dest;
  }
}

const test = function (testTemplate, fun) {
  const { desc, src, dest } = testTemplate;

  console.log(`===<${desc}>===`);
  let result = false;
  if (fun(src) === dest) {
    result = true;
  }
  console.log(`===${result ? "pass" : "fail"}===`);
};

export { TestTemplate, test };
