// var router = express.Router();
var pets = require("../models/animals.js");

module.exports = function (app) {
    //Get all examples
    app.get("/allpets", function (req, res) {
        pets.findAllPets(function (data) {
            res.render({
                pets_data: data
            })
        })
    });
    app.get("/alldogs", function (req, res) {
        pets.findAllDogs(function (data) {
            res.render({
                pets_data: data
            })
        })
    });


    app.get("/allcats", function (req, res) {
        pets.findAllCats(function (data) {
            res.render({
                pets_data: data
            })
        })
    });


    //Create a new example
    app.post("/api/comments", function (req, res) {
        var newComment = req.body.comment
        pets.createComment(newComment, function (data) {
            res.redirect("/")
        }
        )
    })

    //Delete an example by id
    app.put("/api/comments/:id", function (req, res) {
        var id = req.params.id;

        pets.updateComment(id, function (result) {
            console.log(result)
            res.sendStatus(200)
        });
    });

    app.delete("/api/comments/:id", function (req, res) {
        pets.deleteComment(id, function (result) {
            console.log(result)
            res.sendStatus(200)
        })

    });
};