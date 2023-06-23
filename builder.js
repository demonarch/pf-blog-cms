import fs from "fs";
import { Builder } from "coalcodes-route-builder";
import { essentials } from "pulseflow";

const structureJSON = await essentials.readStructure();

const modules = structureJSON.modules;
for (let module in modules) {
    if (modules[module].controllers) {
        const controllersPath = `./modules/${module}/controllers`;
        let builder = new Builder(controllersPath, './project');

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

