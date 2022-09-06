const python = require("./snippets/python.ts")
const javasceipt = require("./snippets/javasceipt.ts")
const typescript = require("./snippets/typescript.ts")
// js frameworks
const react = require("./snippets/frameworks/javasceipt/react.ts")
const vue = require("./snippets/frameworks/javasceipt/vue.ts")
const angular = require("./snippets/frameworks/javasceipt/angular.ts")
const svelte = require("./snippets/frameworks/javasceipt/svelte.ts")

//python frameworks


(function () {
    python()
    javasceipt()
    typescript()
    react()
    vue(),
    angular(),
    svelte(),
})();
