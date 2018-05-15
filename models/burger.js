var orm = require('./../config/orm');

var burger = {
    selectAll: function (callBack) {
        orm.selectAll("burgers", function (result) {
            callBack(result);
        });
    },
    insertOne: function(columns,values,callBack) {
        orm.insertOne("burgers",columns,values,function(result){
            callBack(result);
        })
    },
    updateOne: function(objColVals,condition,callback) {
        orm.updateOne("burgers",objColVals,condition, function(result){
            callback(result);
        })
    },
    truncate: function(table,callback){
        orm.truncate("burgers",function(result){
            callback(result);
        })
    }
}

module.exports = burger;