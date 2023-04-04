const config = require("../config/db.config.js"); // adding database config

const Sequelize = require("sequelize");
const sequelize = new Sequelize( // creating connection to database using db.config values
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize); // adding user model
db.date = require("../models/date.model.js")(sequelize, Sequelize); // adding date model
db.reservation = require("../models/reservation.model.js")(sequelize, Sequelize); // adding reservation model

// Declaring relations of tables

// reservation-date one-to-one relation

db.reservation.hasOne(db.date); // reservation has one date
db.date.belongsTo(db.reservation); // date belongs to one reservation

// reservation-user one-to-many relation

db.user.hasMany(db.reservation); // user has many reservations
db.reservation.belongsTo(db.user); // reservation belongs to one user

module.exports = db;