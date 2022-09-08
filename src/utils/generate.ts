import { writeFile } from "node:fs";
async function generate(snippets: string, filename: string){
    console.log("generating snippets");
   await writeFile(
        global.__project_path + "snippets/" + filename + ".snippets",
        snippets,
        {},
        (error) => {
            if (error) console.log(error);
        }
    );
}

export default generate;
