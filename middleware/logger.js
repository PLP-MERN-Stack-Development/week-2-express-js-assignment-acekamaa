module.exports = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// middleware/logger.js
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logger;
