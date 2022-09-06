function parseBody(body:string|string[]): string {
  let parsed: string = "";
  if (typeof body !== "string") {
    body.map((str, ind) => {
      if (str === "\n" && body[ind + 1] !== "\t") {
        parsed += str + "\t";
      }
      parsed += str+"\n\t";
    });
  }

  if (typeof body === "string") {
    for (let i = 0; i < body.length; i++) {
      if (body[i] === "\n" && body[i + 1] !== "\t") {
        parsed += body[i] + "\t";
      }
      parsed += body[i];
    }
  }

  return parsed;
}

module.exports = parseBody;
