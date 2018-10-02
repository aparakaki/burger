var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.select(function(data) {
        var obj = {
            burgers: data
        };
        // console.log(data);
        res.render("index", obj);
    })
});

router.post("/api/burgers", function(req, res) {
    burger.insert(req.body, function(data) {
        res.json(data);
    })
});

router.put("/api/burgers/:id", function(req, res) {
    // console.log(req.body);
    burger.update(req.params.id, req.body, function(data) {
        res.json(data);
    })
});

router.delete("/api/burgers/:id", function(req, res) {
    burger.delete(req.params.id, function(data) {
        // console.log(data);
        res.json(data);
    })
});

module.exports = router;