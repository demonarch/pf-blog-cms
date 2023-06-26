import createError from "http-errors";

// four parameters are necessary for express to recognize this as an error handler
/**
 * @param {*} err
 * @param {*} req
 * @param {NextFunction|Response<*, Record<string, *>>} res
 * @param {NextFunction} next
 */
export const serverError = (err, req, res, next) => {
  const error = { message: "An error occurred" };
  let status = 500;

  if (err.statusCode) {
    status = err.statusCode;
    error.message = err.message;
  } else if (err.status) {
    status = err.status;
    error.message = err.message;
  } else if (err instanceof Error) {
    error.message = err.message;
  }

  res.contentType = "application/json";
  res.status = status
  res.error = error;
  return res;
};

  
  
  

export const notFoundError = (req, res, next) => {
    const error = createError(404)
    next(error);
}

export const throwForbiddenError = (permissions, req) => {
    if (!req.permissions || !req.permissions.can || typeof req.permissions.can !== 'function') {
        throw createError(500, 'Error in access control');
    }
    if (!permissions.some(permission => req.permissions.can(permission))) {
        throw createError(403, `Forbidden access for role ${req.user.role}`);
    }
}

export const requestHandler = (controllerClass, controller, permissions) => {
    async function handler (req, res, next) {
        try {
            if (Array.isArray(permissions) && permissions.length > 0) {
                throwForbiddenError(permissions, req);
            }
            const result = await controller.bind(controllerClass)(req, res, next);
            if (!res._headerSent && result) {
                res.status(res.locals.status || 200)
                    .json({result});
            }
        } catch (e) {
            next(e);
        }
    }
    return handler;
}
