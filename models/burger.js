var orm = require("../config/orm.js");

var burger = {
    select: function(cb) {
        orm.selectAll("burgers", function(results) {
            cb(results);
        });
    },
    insert: function(newObj, cb) {
        orm.insertOne("burgers", newObj, function(results) {
            cb(results);
        });
    },
    update: function(id, obj, cb) {
        orm.updateOne("burgers", id, obj, function(results) {
            cb(results);
        });
    },
    delete: function(id, cb) {
        orm.delete("burgers", id, function(results) {
            cb(results);
        })
    }
};

module.exports = burger;