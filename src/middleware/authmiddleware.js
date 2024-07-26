const jwt = require('jsonwebtoken');

const JWT_SECRET = 'clpsecret@22';

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(403).json({ message: 'No token provided' });
  }
};

module.exports = authenticateToken;
