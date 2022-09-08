import plugin from "../plugin.json";
import Setup from "./setup";
import Clean from "./utils/cleanup";
import { mkdir } from "node:fs";
// plugin class
class CodeSnip {
    init(): any {
        Setup();
    }
    destroy(): any {
        Clean();
    }
}

///

const codesnip = new CodeSnip();
if (global.acode) {
    let acode = global.acode;
    global.__project_path = "/storage/emulated/0/.acode/codesnip/";
    mkdir(__project_path, () => {});
    mkdir(__project_path + "sources", () => {});
    mkdir(__project_path + "snippets", () => {});
    let Id: string = ""//plugin.id;
    // unitialize plugin
    acode.setPluginInit(Id, (baseUrl: string, {}) => {
        if (!baseUrl.endsWith("/")) {
            baseUrl += "/";
        }
        codesnip.init();
    });
    // unmount plugin
    acode.setPluginUnmount(plugin.id, () => {
        codesnip.destroy();
    });
} else {
    //global.__project_path = process.cwd() + "/src/";
    global.__project_path = "/storage/emulated/0/.acode/codesnip/";
    mkdir(__project_path, (error: any) => {});
    mkdir(__project_path + "sources", (error: any) => {});
    mkdir(__project_path + "snippets", (error: any) => {});

    codesnip.init();
}
