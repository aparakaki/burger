var mysql = require("mysql");
var connection;
// require('dotenv').config();

// console.log(process.env)

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    host: process.env.JAWSDB_URL,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: 3306,
    database: process.env.DATABASE
  });
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "burger_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
