var connection = require('config.json')
var orm = {
    findAll(tableName,cb){
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString,[tableName], function(err,result){
            if (err) throw err;
            cb(result)
        })
    }
}