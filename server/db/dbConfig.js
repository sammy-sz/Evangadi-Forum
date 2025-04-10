const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "77.37.35.26",
  user: "u686752578_evangadi_user",
  password: process.env.DB_PASSWORD,
  database: "u686752578_evangadi_db",
});

module.exports = db.promise();
