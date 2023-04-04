module.exports = {
  HOST: "127.0.0.1", // your database host name
  USER: "root", // your database user name
  PASSWORD: "matthewb", // your database password
  DB: "cornersdb", // your database table name
  dialect: "mysql", // your database
  pool: { // settings
    max: 5, // max queries
    min: 0, // min queries
    acquire: 30000,
    idle: 10000 // wait response from database time
  }
};