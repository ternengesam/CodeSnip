const fs = require("fs");

const url = "https://github.com/tunnckoCore/modern-javascript-snippets/raw/master/vscode/snippets.json"
const getsource = require("../helpers/getsource.ts");
const formatter = require("../helpers/formatter.ts");
const generator = require("../helpers/generate.ts");
const source = process.cwd() + "/src/sources/javascript.json";

function init() {
  if (fs.existsSync(source)) {
    generator(formatter(source, fs), "python", fs);
  } else {
    getsource(url, "javascript", fs);
    init()
  }
}
module.exports = init
