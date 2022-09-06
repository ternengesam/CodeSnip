//const fs = require("fs");
const https = require("https");

function getSource(url: string, pathname: string,fs) {
  const source_path = process.cwd() + "/src/sources/" + pathname + ".json";

  let file = fs.createWriteStream(source_path);

  https
    .get(url, (res) => {
      let stream = res.pipe(file);
      stream.on("finish", () => {
        console.log("get source finished");
      });
    })
    .on("error", (e) => {
      console.log(e);
    });
};
module.exports = getSource