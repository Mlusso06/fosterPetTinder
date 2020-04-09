var connection = require('./config.js')
var orm = {
    findOne(tableName, value, cb){
        var queryString = "SELECT * FROM ?? WHERE id = ?";
        connection.query(queryString,[tableName,value],function(err,result){
            if (err) throw err;
            cb(result)
        })
    },
    findAll(tableName, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    createComment(tableName, columnName, values, cb) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?,?)";
        connection.query(queryString[tableName, columnName[0], columnName[1], values[0], values[1]], function (err, result) {
            if (err) throw err
            cb(result)
        })
    },
    updateComment(tableName, columnName, values, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [tableName, columnName[0], values[0], columnName[1], values[1]], function (err, result) {
            if (err) throw err
            cb(result)
        })
    },
    deleteComment(tableName,value,cb){
        var queryString = "DELETE FROM ?? WHERE ?? = ?"
        connection.query(queryString,[tableName, value],function(err,result){
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm