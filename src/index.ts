import plugin from "../plugin.json";
import Setup from "./setup";
import Clean from "./utils/cleanup";
import { mkdir } from "node:fs";
import rimraf from "rimraf";

// plugin class

class CodeSnip {
  constructor() {}
  __project_path: string = "";
  init(): any {
    mkdir(this.__project_path, () => {});
    mkdir(this.__project_path + "sources", () => {});
    mkdir(this.__project_path + "snippets", () => {});
    Setup();
  }
  destroy(): any {
    rimraf.sync(this.__project_path);
    Clean();
  }
}
///

const codesnip = new CodeSnip();

// edit this line to your desired path
global.__project_path = /* start here ---> */ process.cwd() + "/src/";
// edit the above line
codesnip.__project_path = global.__project_path;
codesnip.init();
