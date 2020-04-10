var connection = require('./config.js')
var orm = {
    findOne: function (tableName, pet_type, value, cb) {
        var queryString = "SELECT * FROM ?? WHERE pet_type = ? AND pet_name = ?";
        connection.query(queryString, [tableName, pet_type, value], function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    findAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    findAllPetType: function (tableName, pet_type, cb) {
        var queryString = "SELECT * FROM ?? WHERE pet_type = ?;";
        connection.query(queryString, [tableName, pet_type], function (err, result) {
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
    deleteComment(tableName, value, cb) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?"
        connection.query(queryString, [tableName, value], function (err, result) {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm