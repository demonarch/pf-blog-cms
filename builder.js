import fs from "fs";
import path from "path";
import { Builder } from "coalcodes-route-builder";
import { essentials } from "pulseflow";


const structureJSON = await essentials.readStructure();

const modules = await structureJSON.modules;
for (let module in modules) {
    if (modules[module].controllers) {
        const controllersPath = `./modules/${module}/controllers`;
        let builder = new Builder(controllersPath, controllersPath);

        builder.options.wrappers.routes = (routes) =>
            `import {requestHandler} from "./handler.js";\n\nexport default (router) => {\n${routes}\n\treturn router\n}`;

        builder.options.wrappers.auth = (route) => {
            let roles = []
            if (Array.isArray(route.role)) {
                roles = route.role
            }
            roles = roles.map(role => role.trim()).filter(role => role)
            return ` requestHandler(${route.className}, ${route.className}.${route.classMethod}, ${JSON.stringify(roles)})`;
        }
        builder.build()
    }
}

console.log('concatenating all in ./project/endpoints.js ...');
var allRoutes = '';
for (let module in modules) {
    if (modules[module].controllers) {
        const controllersPath = `./modules/${module}/controllers`;
        const indexPath = path.join(controllersPath, 'index.js');
        const routesStr = await essentials.trimFile(indexPath, 'export default (router) => {', '	return router\n}');
        if (routesStr != '') {
            allRoutes = allRoutes + routesStr;
        }
    }
}
const myimports = await essentials.importControllers();

const imports = await myimports.join('\n');
const endpointsFileContent = imports + '\nexport default (router) => {' + allRoutes + '	return router\n}';
fs.writeFileSync('./project/endpoints.js', endpointsFileContent);

console.log(essentials.colors.green + 'imported all endpoints in ./project/endpoints.js' + essentials.colors.reset);