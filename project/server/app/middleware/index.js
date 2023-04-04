const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");

module.exports = { // export authJwt and verifySignUp middlewares
  authJwt,
  verifySignUp
}