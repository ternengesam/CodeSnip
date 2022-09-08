import plugin from "../plugin.json";
import Setup from "./setup";
import Clean from "./utils/cleanup";
import { mkdir } from "node:fs";
import rimraf from "rimraf";

// plugin class

class CodeSnip {
    constructor() {}
    __project_path: string = "";
    baseUrl: string = "";
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
if (global.acode) {
    let acode = global.acode;
    let Id: string = plugin.id;

    // unitialize plugin
    acode.setPluginInit(
        Id,
        (baseUrl: string, { cacheFileUrl, casheFile }: any) => {
            if (!baseUrl.endsWith("/")) {
                baseUrl += "/";
            }
            codesnip.baseUrl = baseUrl;
            codesnip.__project_path = global.__project_path;
            codesnip.init();
        }
    );

    // unmount plugin
    acode.setPluginUnmount(plugin.id, () => {
        codesnip.__project_path = global.__project_path;
        codesnip.destroy();
    });
} else {
    global.__project_path = process.cwd() + "/src/";
    codesnip.__project_path = global.__project_path;
    codesnip.init();
}
