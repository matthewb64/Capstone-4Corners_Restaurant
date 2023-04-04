const { verifySignUp } = require("../middleware"); // add sign up verification
const controller = require("../controllers/auth.controller"); // add authenticate controller

module.exports = function(app) {
  app.use(function(req, res, next) { // response headers
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Origin",
      "*"
    );
    res.type('json');
    next();
  });

  app.post( // handling post request sign up
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail, // using middleware for checking if email does not duplicated
    ],
    controller.signup // using controller for sign up
  );

  app.post("/api/auth/signin", controller.signin); // handling post request sign in
};