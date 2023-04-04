const controller = require("../controllers/date.controller"); // add dates controller

module.exports = function(app) {
  app.use(function(req, res, next) { // use response headers
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/dates/dates", controller.dates); // handling get request for retrieving dates
};