
var path = require("path");

// Routing for the exports
var Pet = require("../models/animals.js")
module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });

    // if no matching route is found default to home
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/top10", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/top10.html"))
    })
    app.get("/guidelines", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/guidelines.html"))
    })
    app.get("/resources", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/resources.html"))
    })
    app.get("/petsearch", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/petsearch.html"))
    })
    app.get("/dogs/:id", function (req, res) {
        if (req.params.id) {
            Pet.findOneDog(function (response) {
                console.log(response)
            }, req.params.id)
        }

        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
    app.get("/petprofile", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/petprofile.html"))
    })
};
