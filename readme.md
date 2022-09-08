# CodeSnip

#### CodeSnip is a snippets generator plugin for acode editor

##### it generates and formats vscode snippets for acode

### This pluging requires Acodes Snippets plugin

## setup

-   command command palette

-   type "Set snippets directory" enter the command

-   in the files manager view click the plus icon at to left

-   select add path and navigate to your device home storage path

-   enable hidden files

-   select ".acode > codesnip > snippets"

-   restart acode

## Add custom vscode snippets

you can add your custom snippets in CodeSnip sources path
i.e ".acode/codesnip/sources"
Note: the files file must be a json file

follow this process to add custom snippets

### process

-   create a folder and name it with the snippets file type name
    e.g jsx or python
-   then add your json file
-   the json file must be in this formats

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

### please report any errors [here](https://github.com/3egle/CodeSnip/issues)

### Thank you for using codesnip
