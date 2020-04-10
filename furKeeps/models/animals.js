var orm = require("../config/orm.js")
var Pet = {
    findOneCat: function (pet_name, cb) {
        orm.findOne("pets", "cat", pet_name, function (res) {
            cb(res)
        })
    },
    findOneDog: function (pet_name, cb) {
        orm.findOne("pets", "dog", pet_name, function (res) {
            cb(res)
        })
    },
    findAllPets: function (cb) {
        orm.findAll("pets", function (res) {
            cb(res)
        })
    },
    findAllCats: function (cb) {
        orm.findAllPetType("pets", "cat", function (res) {
            cb(res)
        })
    },
    findAllDogs: function (cb) {
        orm.findAllPetType("pets", "dog", function (res) {
            cb(res)
        })
    },
    createComment: function (cb) {
        orm.createComment("petComments", ["author", "comment"], function (res) {
            cb(res)
        })
    },
    updateComment: function (id, cb) {
        orm.updateComment("petComments", ["comment", "id"], function (res) {
            cb(res)
        })
    },
    deleteComment: function (id, cb) {
        orm.deleteComment("petComments", ["comment", "id"], function (res) {
            cb(res)
        })
    }
}
module.exports = Pet;