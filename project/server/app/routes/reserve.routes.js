const controller = require("../controllers/reserve.controller"); // adding reserve controller

module.exports = function(app) { // using response headers
  app.use(function(req, res, next) {
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

  app.post( // handling post request for reservation
    "/api/reserve/reserve",
    controller.reserve // using reserve controller
  );

  app.post(
    "/api/reserve/unreserve",
    controller.unreserve
  )

  app.post("/api/reserve/getreservation", controller.getreservation); // handling post request for getting reservations
};