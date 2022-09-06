let fs = require("fs");
let path = require("path");
let glob = require("glob");

let collection_paths = glob.sync(
  process.cwd() + "/snippets/snippets/**/*.json",
  {}
);

let regular_path = glob.sync(process.cwd() + "/snippets/snippets/*.json", {});

function snippets() {
  let files = [],
    sorted_files = [],
    dirnames = [];

  collection_paths.map((uri) => {
    let file = path.basename(uri);
    dirnames.push(path.basename(path.dirname(uri)));
    if (file.includes("react") || file.includes("next")) {
      files.push("jsx.snippets");
      files.push("tsx.snippets");
    } else files.push(file);
  });

  // sort and remove repetited files
  for (let i = 0; i < files.length; i++) {
    files = files.sort();
    if (files[i] == files[i + 1]) {
      sorted_files.push();
    } else {
      sorted_files.push(files[i]);
    }
  }
}
// merge splits snippets files
function mergeFiles(files_path) {
  let merged_file = "{";
  let keys = [];
  let values = [];

  fs.readdir(files_path, (error, files) => {
    for (let i = 0; i < files.length; i++) {
      if (fs.lstatSync(files_path + files[i]).isDirectory()) {
          mergeFiles(files_path + files[i] + "/");
      } else {
        let data = require(files_path + files[i]);
        Object.keys(data).forEach((key) => {
          keys.push(key);
        });
        Object.values(data).forEach((value) => {
          values.push(value);
        });
      }
    }
    //
    for (let i = 0; i < values.length; i++) {
      if (keys[i].includes('"')) {
        keys[i] = keys[i].split('"').join('\\"');
      }
      if (i == values.length - 1) {
        merged_file +=
          '"' + keys[i] + '"' + ":" + JSON.stringify(values[i]) + "\n";
      } else {
        merged_file +=
          '"' + keys[i] + '"' + ":" + JSON.stringify(values[i]) + "," + "\n";
      }
    }
    //
    fs.writeFileSync(
      process.cwd() + "/build/merge/" + path.basename(files_path) + ".json",
      merged_file + "}"
    );
  });
}
// formart files

//
function build() {
  regular_path.forEach((pt, ind) => {
    formart_file(pt);
  });
}

module.exports = { mergeFiles, build, format_file, snippets };
