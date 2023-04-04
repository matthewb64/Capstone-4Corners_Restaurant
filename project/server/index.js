
const express = require('express'); // library for creating server and validate requests
const cors = require("cors");

const app = express();


app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded





const PORT = process.env.PORT || 8080;

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


require('./app/routes/auth.routes')(app); // add authenticate route
require('./app/routes/reserve.routes')(app); // add reservation route
require('./app/routes/date.routes')(app); // add dates route


const db = require("./app/models");

db.sequelize.sync(); // sync database

// if you want to drop tables after start of server insert below code to sync metod

// {force: true}).then(() => {
//   console.log('Drop and Resync Db');
// }

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});