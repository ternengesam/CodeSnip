function parseBody(body: any): string {
    let parsed: string = "";
    if (Array.isArray(body)) {
        body.map((str, ind) => {
            if (/\n/.test(str) && !/\t/.test(body[ind + 1])) {
                parsed += `${str}\t`;
            }
            parsed += `${str}\n\t`;
        });
    }

    if (typeof body == "string") {
        for (let i = 0; i < body.length; i++) {
            if (/\n/.test(body[i]) && !/\t/.test(body[i + 1])) {
                parsed += `${body[i]}\t`;
            } else {
                parsed += `${body[i]}`;
            }
            if (/\s/.test(body[i]) && /\n/.test(body[i - 1])) {
                parsed += "";
            }
        }
    }
    return parsed;
}
export default parseBody;
