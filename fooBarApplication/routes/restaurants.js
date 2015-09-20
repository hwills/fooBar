var express = require('express');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'sql5.freesqldatabase.com',
  user     : 'sql590678',
  password : 'gH6!dJ2!',
  database : 'sql590678'
});
var router = express.Router();

var email = "hwills@wustl.edu"

connection.connect();

connection.query("select * from buyers where email='"+email+"'", function(err, rows, fields) {
  if (!err){
    console.log('The solution is: ', rows);
    var address = rows[0]['address'];
    var homeCity = (address.split(",")[1]).substr(1);
    router.get('/', function(req, res, next) {
        res.render('restaurants', {city: homeCity});
    });
  }
  else{
    console.log('Error while performing Query.');
    router.get('/', function(req, res, next) {
        res.render('login', {});
    });
  }
});


/* GET home page. */

module.exports = router;
