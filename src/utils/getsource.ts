import { stat, createWriteStream, readFile, writeFile } from "node:fs";
import { get } from "node:https";
import { basename } from "node:path";
import { parse } from "json5";
import Clean from "./cleanup";

function getSource(url: string, pathname: string, writename?: string) {
    console.log("downloading snippets");
    const source_path = `${global.__project_path}sources/${pathname}/${
        writename || pathname
    }.json`;
    return new Promise<void>((resolve: any, reject: any) => {
        get(url, (res: any) => {
            let stream = createWriteStream(source_path);
            res.on("error", () => reject());
            stream.on("finish", () => {
                stream.close();
                resolve();
            });
            stream.on("error", () => reject());
            res.pipe(stream);
        }).on("error", (error: any) => {
            Clean();
            console.log(error);
            reject();
        });
    }).catch((error: any) => {});
}

export default getSource;
