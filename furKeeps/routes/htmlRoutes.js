// var db = require("../models");

// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbExamples
//       });
//     });
//   });

//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };
//Dependency for the HTML routing for 
var path = require("path");

// Routing for the exports
var Pet = require("../models/animals.js")
module.exports = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });

    // if no matching route is found default to home
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/top10", function(req, res){
        res.sendFile(path.join(__dirname, "../public/top10.html"))
    })
    app.get("/guidelines", function(req, res){
        res.sendFile(path.join(__dirname, "../public/guidelines.html"))
    })
    app.get("/resources", function(req, res){
        res.sendFile(path.join(__dirname, "../public/resources.html"))
    })
    app.get("/dogs/:id", function(req, res){
        if (req.params.id){
            Pet.findOneDog(function(response){
                console.log(response)
            }, req.params.id)
        }

        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
};
