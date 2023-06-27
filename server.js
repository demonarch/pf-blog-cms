import express from "express";
import * as endpoints from './project/endpoints.js';
import { requestHandler, notFoundError, serverError } from './handler.js';

const app = express();
const router = express.Router();

for (const route of Object.values(endpoints)) {
  route(router);
}

// Request handler
const customRequestHandler = (req, res, next) => {
  const { path, method } = req;

  // Loop through the routes and find the matching one
  for (const layer of router.stack) {
    if (layer.route.path === path && layer.route.methods[method.toLowerCase()]) {
      return layer.route.stack[0].handle(req, res, next);
    }
  }

  // If no matching route is found, invoke the notFoundError handler
  notFoundError(req, res, next);
};

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Register the request handler
app.use(customRequestHandler);

// Error handlers
app.use(serverError);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('http://localhost:3000');
});

export { app };
