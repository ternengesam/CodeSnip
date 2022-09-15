# CodeSnip

#### CodeSnip is a snippets generator for acode editor

##### it generates and formats vscode snippets for acode

## Installation

clone this reposory

```
git clone https://github.com/3egle/CodeSnip
yarn install

```

edit src/index.ts file

```
// edit this line to your desired path
global.__project_path = /* start here ---> */ process.cwd() + "/src/";
// edit the above line
```

assign your desired path to the global.\_\_project_path

##### for example the snippets path directory you created as required by acode snippets plugin

## Adding sources

##### there are two ways to add sources

##### 1. add source url in the src/sources.ts file e.g

```
export const python: string[] = [
    "https://raw.githubusercontent.com/tushortz/vscode-Python-Extended/master/snippets/modules.json",
];
```

##### note that the name of the array is the name CodeSnip your generate as snippets file type like "python.snippets"

##### 2. add source with raw json files. follow the process below

- create a folder and name it with the snippets file type name
  e.g jsx or python
- then add your json file
- the json file must be in this formats

```
"reactClassComponentRedux": {
    "prefix": "rcredux",
    "body": [
        "import React, { Component } from 'react'",
        "import { connect } from 'react-redux'",
        "",
        "export class ${1:${TM_FILENAME_BASE}} extends Component {",
            " render() {",
                " return (",
                    " <div>${1:first}</div>",
                " )",
            " }",
        "}",
        "",
        "const mapStateToProps = (state) => ({})",
        "",
        "const mapDispatchToProps = {}",
        "",
        "export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})"
        ],
    "description": "Creates a React component class with connected redux and ES7 module system",
 },
```

### Generating snippets

###### run command " yarn start:build " to generate snippets

###### generated snippets will be found in your \_project_path directory

### please report any errors [here](https://github.com/3egle/CodeSnip/issues)

### Thank you for using codesnip
