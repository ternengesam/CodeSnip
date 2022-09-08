import parseBody from "./parsebody";

function format(file: object): string {
 console.log("formatting snippets");
 
 
    const data: object = file;
    let keys: string[] = Object.keys(file);
    let values: object[] = Object.values(file);
    let snippets: string = "";

    for (let i = 0; i < keys.length; i++) {
        let body: string = parseBody(
            data[keys[i] as keyof typeof data]["body"]
        );
        snippets += `# ${
            data[keys[i] as keyof typeof data]["description"] || keys[i]
        }\nsnippet ${
            data[keys[i] as keyof typeof data]["prefix"]
        }\n\t${body}\n`;
    }
    return snippets;
}

export default format;
