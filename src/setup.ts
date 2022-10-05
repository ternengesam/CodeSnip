import { readdirSync, readFileSync } from "node:fs";
import mv from "mv";
import { parse } from "json5";
import Install from "./install";
import * as sources from "./sources";
import Clean from "./utils/cleanup";
import generate from "./utils/generate";
import format from "./utils/formatter";

async function Setup() {
    const snippets_path: string = `${global.__project_path}sources/`;
    let source_keys: string[] = Object.keys(sources);
    let source_values: string[][] | string[] = Object.values(sources);
    console.log(source_keys.length);

    try {
        if (!(readdirSync(snippets_path).length == source_keys.length)) {
            for (let snip = 0; snip < source_keys.length; snip++) {
                if (source_keys[snip] == "react") {
                    Install(source_values[snip], "jsx");
                    Install(source_values[snip], "tsx");
                } else {
                    Install(source_values[snip], source_keys[snip]);
                }
            }
        }
        readdirSync(snippets_path).forEach((path: any) => {
            readdirSync(snippets_path + path).forEach(
                (snip: any, ind: number) => {
                    let file: object = parse(
                        readFileSync(`${snippets_path}${path}/${snip}`, "utf8")
                    );

                    generate(format(file), snip.split(ind + ".json").join(""));
                }
            );
        });
    } catch (error) {
        console.log("setup error:", error);
        Clean();
    }
}

export default Setup;
