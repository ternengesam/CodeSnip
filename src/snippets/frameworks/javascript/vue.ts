const fs = require("fs")
const _ = require("lodash")
const url = [
"https://raw.githubusercontent.com/LissetteIbnz/vscode-vue-typescript-sfc-snippets/master/snippets/vue-base.json",
"https://raw.githubusercontent.com/LissetteIbnz/vscode-vue-typescript-sfc-snippets/master/snippets/typescript.json",
"https://raw.githubusercontent.com/LissetteIbnz/vscode-vue-typescript-sfc-snippets/master/snippets/vue-html.json",
"https://raw.githubusercontent.com/LissetteIbnz/vscode-vue-typescript-sfc-snippets/master/snippets/vue-scripts.json",
"https://raw.githubusercontent.com/LissetteIbnz/vscode-vue-typescript-sfc-snippets/master/snippets/vue-class-style-scripts.json",
]

const getsource = require("../../../helpers/getsource.ts");
const formatter = require("../../../helpers/formatter.ts");
const generator = require("../../../helpers/generate.ts");

const source = process.cwd() + "/src/sources/vue/vue-base.json";

function init() {
  if(!fs.existsSync(source)) {
    for (let i = 0; i < url.length; i++) {
        let basename = require("path").basename(url[i]).split(".json").join("")
        getsource(url[i], "vue/"+ basename, fs)
     }
  }
  
  let file_path = process.cwd() + "/src/sources/vue/"
 let merge = _.merge(
     require(file_path+"vue-base.json"),
     require(file_path+"typescript.json"),
     require(file_path+"vue-html.json"),
     require(file_path+"vue-class-style-scripts.json"),
     require(file_path+"vue-scripts.json")
     )
  fs.writeFileSync(file_path+"vue.json",JSON.stringify(merge))
  
  if (fs.existsSync(source)) {
    generator(formatter(file_path+"vue.json", fs), "vue", fs);
  } 
}
init()
module.exports = init