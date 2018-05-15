// Import MySQL connection.
var connection = require("./connection.js");

//Helper functions for SQL syntax//
//print # of parameter question marks to string//
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
//Convert key/value pairs to SQL syntax//
function objToSql(ob) {
  var arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations 
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

//Object for all SQL queries//
orm = {
  //Select ALL from Table//
  selectAll: function (tableInput,callBack) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    });
  },

  //Insert One into Table//
  insertOne: function (table, columns, values,callBack) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(values.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, values, function (error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    })

  },
  //Update One Existing//
  updateOne: function (table, objColVals, condition) {
    var queryString = "UPDATE " + table + " SET "
    queryString += objToSql(objColVals);
    queryString += " WHERE "
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function (error, result) {
      if (error) {
        throw error;
      }
    })
  },

  //Truncate Table//
  truncate: function(table){
    var queryString = "TRUNCATE " + table

    connection.query(queryString,function(error,result){
      if(error){
        throw error;
      }
    })
  }
}

module.exports = orm;
