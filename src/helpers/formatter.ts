//const fs = require("fs");
const path = require("path");
const parsebody = require("./parsebody.ts");

function format(file: string,fs:any): string {
  const data = require(file);
  let keys = Object.keys(data);
  let snippets: string = "";

  for (let i = 0; i < keys.length; i++) {
    let body: string = parsebody(data[keys[i]].body);
    snippets += `# ${data[keys[i]].description || keys[i]}\nsnippet ${
      data[keys[i]].prefix
    }\n\t${body}\n`;
  }
  return snippets
}

module.exports =format

