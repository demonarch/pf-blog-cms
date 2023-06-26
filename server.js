import restify from "restify";
import routes from './project/endpoints.js';

// Create the Restify server
const server = restify.createServer();

// Body parsing middleware
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// Function to find the matching route
function findMatchingRoute(req) {
  const { path, method } = req;

  // Loop through the routes and find the matching one
  for (const route of routes(server.router)) {
    if (route.spec.path === path && route.spec.method === method) {
      return route;
    }
  }

  return null; // Return null if no matching route is found
}

// Request handler
function requestHandler(req, res, next) {
  const matchingRoute = findMatchingRoute(req);

  if (matchingRoute) {
    // Invoke the matching route's handler
    matchingRoute.spec.handler(req, res, next);
    console.log(req);
  } else {
    res.send(404, 'Route not found');
  }
}

// Register the request handler
server.use(requestHandler);

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('localhost:3000');
});

export { server };
