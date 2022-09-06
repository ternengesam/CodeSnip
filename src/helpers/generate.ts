//const fs = require("fs")
function generate(snippets: string, filename: string,fs:any): void {
  fs.writeFile(
    process.cwd() + "/src/generated/" + filename + ".snippets",
    snippets,
    {},
    (error) => {
      if (error) console.log(error.message);
      console.log("snippets generates successfull");
    }
  );
}

module.exports = generate;
