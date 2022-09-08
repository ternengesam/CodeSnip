import {
    existsSync,
    readdirSync,
    mkdir,
    readFileSync,
    writeFileSync,
} from "node:fs";
import { basename } from "node:path";
import { parse } from "json5";
import getSource from "./utils/getsource";
import format from "./utils/formatter";
import generate from "./utils/generate";
import Clean from "./utils/cleanup";

// load streams
async function loadStream(url: string[] | string, name: string) {
    if (typeof url == "string") {
        await getSource(url, name);
    } else {
        for (let i = 0; i < url.length; i++) {
            await getSource(url[i], name, name + i);
        }
    }
}

// call load streams

async function load(url: string, name: string) {
    loadStream(url, name)
        .then(() => {
            console.log("all done");
        })
        .catch((error) => {
            Clean();
        });
}

//

async function loadSnips(source: string) {
    try {
        let filename = basename(source);
        let filenames: any[] = await readdirSync(
            source.split(filename).join("")
        );
        let merge: object = {};
        for (let i = 0; i < filenames.length; i++) {
            let file_data: string = readFileSync(
                source.split(filename).join(filenames[i]),
                "utf8"
            );
            Object.assign(merge, parse(file_data));
        }
        await generate(format(merge), filename.split(".json").join(""));
    } catch (error) {
        Clean();
    }
}

async function Install(url: string[] | string, name: string) {
    var source_path = `${global.__project_path}sources/`;

    
    let source: string = source_path.concat(`${name}/${name}.json`);
    mkdir(source_path + name, (error: any) => {
        if (error) console.warn("exists");
    });
    await loadStream(url, name);
   await loadSnips(source);
}
export default Install;
