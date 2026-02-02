export const validateBody = (schema) => {
  return (req, res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      return res.status(400).json({
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid request body",
          details: err.errors.map(e => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
      });
    }
  };
};
