var connection = require("../config/connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  insertOne: function(table, burgerObj, cb) {
    burgerObj.devoured = false;
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, burgerObj], function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  
  updateOne: function(table, id, obj, cb) {
    var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";

    connection.query(queryString, [table, obj.devour, id], function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  delete: function(table, id, cb) {
    var queryString = "DELETE FROM ?? WHERE id = ?";

    connection.query(queryString, [table, id], function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};

module.exports = orm;
