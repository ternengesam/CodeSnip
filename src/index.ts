import plugin from "../plugin.json";
import Setup from "./setup";
import Clean from "./utils/cleanup";
import { mkdir } from "node:fs";
import rimraf from "rimraf";

// plugin class

class CodeSnip {
  constructor() {}
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
global.__project_path = process.cwd() + "/src/";
codesnip.__project_path = global.__project_path;
codesnip.init();
