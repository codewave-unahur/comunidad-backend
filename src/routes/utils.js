import express from 'express';

export const withErrorHandling = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((error) => {
    const statusCode = error.statusCode || 500;
    
    res.status(statusCode).json({
      error: {
        message: error.message,
        status: statusCode,
      },
    });
  });

export function errorAwareRouter() {
  const basicRouter = express.Router();

  function newRouter(...params) {
    basicRouter(...params);
  }

  newRouter.get = function (path, controller) {
    basicRouter.get(path, withErrorHandling(controller));
  };
  newRouter.post = function (path, controller) {
    basicRouter.post(path, withErrorHandling(controller));
  };
  newRouter.patch = function (path, controller) {
    basicRouter.patch(path, withErrorHandling(controller));
  };
  newRouter.delete = function (path, controller) {
    basicRouter.delete(path, withErrorHandling(controller));
  };
  newRouter.put = function (path, controller) {
    basicRouter.put(path, withErrorHandling(controller));
  };

  return newRouter;
}
