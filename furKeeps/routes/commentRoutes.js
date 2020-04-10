// var router = express.Router();
var pets = require("../models/animals.js");

module.exports = function (app) {
    //Get all pets from database
    app.get("/api/allpets", function (req, res) {
        pets.findAllPets(function (data) {
            res.json({
                pets_data: data
            })
        })
    });
    //get all pets with the pet type cat
    app.get("/api/allcats", function (req, res) {
        pets.findAllCats(function (data) {
            res.json({
                pets_data: data
            })
        })
    });
    //get all pets with the pet type dog
    app.get("/api/alldogs", function (req, res) {
        pets.findAllDogs(function (data) {
            res.json({
                pets_data: data
            })
        })
    });
    //get one specific cat by name
    app.get("/api/onecat/:name", function (req, res) {
        var condition = req.params.name;
        console.log('condition', condition);

        pets.findOneCat(condition, function (data) {
            res.json({
                pets_data: data
            });
        });
    });
    //get one specific dog by name
    app.get("/api/onedog/:name", function (req, res) {
        var condition = req.params.name;
        console.log('condition', condition);

        pets.findOneDog(condition, function (data) {
            res.json({
                pets_data: data
            });
        });
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