// module.exports = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (token === 'Bearer mysecrettoken') {
//     next();
//   } else {
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// };


// middleware/auth.js
const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (authHeader && authHeader === 'Bearer mysecrettoken') {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized: Invalid or missing token' });
  }
};

module.exports = auth;
