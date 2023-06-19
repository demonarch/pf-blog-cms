import restify from "restify";
import routes from './project/endpoints.js';
// import essentials from './node_modules/pulseflow/index.js';
// import * as structure from './project/structure.json'; // this needs @babel/plugin-transform-modules-commonjs



// await essentials.importAll();
// Create the Restify server
const server = restify.createServer();

// Body parsing middleware
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


// Function to find the matching route
function findMatchingRoute(req) {
  const { path, method } = req;

  // Loop through the routes and find the matching one
  for (const route of routes) {
    if (route.path === path && route.method === method) {
      return route.handler;
    }
  }

  return null; // Return null if no matching route is found
}

// Request handler
function requestHandler(req, res, next) {
  const matchingRoute = findMatchingRoute(req);

  if (matchingRoute) {
    // Invoke the matching route's handler
    matchingRoute(req, res, next);
  } else {
    res.send(404, 'Route not found');
  }
}

// Register the request handler
server.use(requestHandler);

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('localhost:3000')
});




export {
  server
}