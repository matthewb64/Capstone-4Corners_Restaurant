const jwt = require("jsonwebtoken"); // adding library for json tokenisation
const config = require("../config/auth.config.js"); // adding authenticate config info
const db = require("../models"); // adding index models
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"]; // retrieving token from x-access-token header

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => { // verify token using declared secret value from auth.config
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};


const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;