// var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
var petMatch = require("../models/animals.js");
var animals = require('../models/animals')

module.exports = function (app) {
    // my git request for the api
    app.get("/api/petMatch", function (req, res) {
        animals.findAllPets(function (data) {
            res.json(data)
        })

    });

    //for to sum all scores
    function bestPet(petScore) {
        var totalDifference = 0

        for (var i = 0; i < petScore.length; i++) {
               totalDifference = totalDifference +  parseInt(petScore[i]) ;
        }
        return totalDifference;
    }
    // post my request to the api
    app.post("/api/petMatch", function (req, res) {

        console.log(req.body)

        var petScore = req.body.scores
        var totalDifference = 0;
        var newPetsArray = []

       totalDifference=  bestPet(petScore)

      animals.findAllPets(function(data){
        //take total scores from user and substract with db. the least difference is the best match
        var userScore =  {
            name: req.body.name,
            photo: req.body.photo,
            scores: totalDifference
        }

          
            var    newPets = data.map(pet=>{

                     var newTotalDiff = Math.abs(pet.match_score - userScore.scores)
                     var newPet = {
                        name: pet.pet_name,
                        photo: pet.pet_photo,
                        newTotalDiff: newTotalDiff
                     }        
                 

                    return newPet

                })


               newPets.sort((a, b)=>{
                   return a.newTotalDiff - b.newTotalDiff
               })
                 
                console.log(newPets)

             //animals.createAllPets(req.body).then({
             //       res.json(newPets[0])
           //  })

           res.json(newPets[0])
             
       })
        //         var bestMatch = {
        //             name: "",
        //             photo: "",
        //             petDifference: 1000
        //         };
        //   // now convert the score into a interger instead of a sting
        //     var userData = req.body;
        //     var userName = userData.name;
        //     var userScores = userData.scores;
        //     console.log(req.body)
        //     var b = userScores.map(function (item) {
        //         return parseInt(item);

        //     });
        //     userData = {
        //         name: req.body.name,
        //         photo: req.body.photo,
        //         scores: b
        //     };

        // // console log the results of the info
        // console.log("Name: " + userName);
        // console.log("User Score " + userScores);

        // var sum = b.reduce((a, b) => a + b, 0);
        // console.log("Sum of Users score " + sum);
        // console.log("Best match for this Pet diff " + bestMatch.petDifference);
        // console.log("---------------------------------------");

        // // run a for loop to cycle through the friends in the data base so you can compare thenm
        // for (var i = 0; i < petMatch.length; i++) {
        //     console.log(petMatch[i].name);        
        //     totalDifference = 0;
        //     console.log("Total Diff: " + totalDifference);
        //     console.log("Best match difference: " + bestMatch.petDifference);

        //     var bestPetScore = petMatch[i].scores.reduce((a, b) => a + b, 0);

        //     console.log("Total friend score: " + bestPetScore);
        //     totalDifference += Math.abs(sum - bestPetScore);
        //     console.log("-------> --------> " + totalDifference);

        //     if (totalDifference <= bestMatch.petDifference) {

        //         bestMatch.name = petMatch[i].name;
        //         bestMatch.photo = petMatch[i].photo;
        //         bestMatch.petDifference = totalDifference;

        //     }

        //     console.log(totalDifference + " Total Difference");
        // }

        // console.log(bestMatch);
        // petMatch.push(userData);
        // console.log("New User Added");
        // console.log(userData);
        // res.json(bestMatch);

    });
};


