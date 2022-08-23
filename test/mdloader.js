// heading, text, 개행문자
// 를 js 객체로 바꿔보자

// const path = require('path')
// const fs = require('fs');
// const { toJson } = require('../index') // 우리가 만들거임
import path from "path";
import fs from "fs";
import toJson from "../index.js";

let data = null;
try {
  data = fs.readFileSync(path.resolve("./test/test.md"), "utf8");
} catch (err) {
  console.log(err);
}
console.log(data);

try {
  const resultJson = toJson.do(data);
  console.log("\n");
  console.log(resultJson);
} catch (err) {
  console.log(err);
}

/**
 * [
    {
        "type": "head1",
        "text": "head1"
    },
    ...
    {
        "type": "text",
        "text": "paragraph with no new-line this line belong to a first line"
    },
    {
        "type": "text",
        "text": "paragraph with no new-line this line belong to a first line"
    }
    ...
]
 */
