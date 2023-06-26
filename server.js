import restify from "restify";
import routes from './project/endpoints.js';
import { requestHandler, notFoundError, serverError } from './handler.js';

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
const customRequestHandler = (req, res, next) => {
  const matchingRoute = findMatchingRoute(req);

  if (matchingRoute) {
    // Invoke the matching route's handler
    matchingRoute.spec.handler(req, res, next);
  } else {
    // If no matching route is found, invoke the notFoundError handler
    notFoundError(req, res, next);
  }
};

// Register the request handler
server.use(customRequestHandler);

// Error handlers
server.on('restifyError', serverError);

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('http://localhost:3000');
});

export { server };
