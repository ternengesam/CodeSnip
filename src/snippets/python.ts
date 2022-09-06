const fs = require("fs");
const url =
  "https://raw.githubusercontent.com/ylcnfrht/vscode-python-snippet-pack/master/snippets/python_snippets.json";

const getsource = require("../helpers/getsource.ts");
const formatter = require("../helpers/formatter.ts");
const generator = require("../helpers/generate.ts");

const source = process.cwd() + "/src/sources/python.json";

function init() {
  if (fs.existsSync(source)) {
    generator(formatter(source, fs), "python", fs);
  } else {
    getsource(url, "python", fs);
    init()
  }
}
module.exports = init
