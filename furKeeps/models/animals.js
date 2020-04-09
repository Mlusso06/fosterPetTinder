var orm = require("../config/orm.js")
var Pet = {
    findOneCat: function(cb, id){
        orm.findOne("cats", id, function(res){
            cb(res)
        })
    },
    findOneDog: function(cb, id){
        orm.findOne("dogs",id, function (res){
            cb(res)
        })
    },
    findAll: function(cb){
        orm.findAll("cats", function(res){
            cb(res)
        })
    },
    findAll: function(cb){
        orm.findAll("dogs", function(res){
            cb(res)
        })
    },
    createComment: function(cb){
        orm.createComment("petComments",["author","comment"], function(res){
            cb(res)
        })
    },
    updateComment: function(id, cb){
        orm.updateComment("petComments", ["comment", "id"], function(res){
            cb(res)
        })
    },
    deleteComment: function(id,cb){
        orm.deleteComment("petComments",["comment", "id"],function(res){
            cb(res)
        })
    }
}
module.exports = Pet;