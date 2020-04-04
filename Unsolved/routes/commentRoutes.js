var router = express.Router();
var pets = require("../models/animals.js");

module.exports = function (app) {
    //Get all examples
    router.get("/alldogs", function (req, res) {
        pets.findAllDogs(function (data) {
            res.render({
                pets_data: data
            })
        })
    });


    router.get("/allcats", function (req, res) {
        pets.findAllCats(function (data) {
            res.render({
                pets_data: data
            })
        })
    });


    //Create a new example
    router.post("/api/comments", function(req, res) {
        var newComment = req.body.comment
        pets.createComment(newComment,function(data){
            res.redirect("/")
          } 
        )
      })

    //Delete an example by id
    router.put("/api/comments/:id", function(req, res) {
        var id =  req.params.id;
      
        pets.updateComment(id, function(result) {
          console.log(result)
          res.sendStatus(200)
        });
      });

    router.delete("/api/comments/:id", function (req, res) {
        pets.deleteComment(id, function(result){
            console.log(result)
            res.sendStatus(200)
        })
        
    });
};