import rimraf from "rimraf";
async function Clean(path?: string) {
    try {
        await rimraf.sync(path || global.__project_path + "sources/*");
        await rimraf.sync(path || global.__project_path + "snippets/*");
        console.log("clean finished");
    } catch (error: any) {
        console.log("Clean failed:",error);
    }
}
export default Clean;
