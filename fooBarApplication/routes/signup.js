var express = require('express');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'sql5.freesqldatabase.com',
  user     : 'sql590678',
  password : 'gH6!dJ2!',
  database : 'sql590678'
});
var router = express.Router();

connection.connect();

var name = "James Farquar";
var email = "jfq@gmail.com";
var phone = "9179808822";
var address = "1 World Way, Boston, MA";
var password = "go4gold";

connection.query("insert into buyers (name, email, phone, address, password) values ('"+name+"', '"+email+"', '"+phone+"', '"+address+"', '"+password+"')", function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
    router.get('/', function(req, res, next) {
        res.render('login', {});
    });
});

var homeCity = (address.split(",")[1]).substr(1);

/* GET home page. */
router.get('/restaurants', function(req, res, next) {
  res.render('restaurants', {city: homeCity});
});

module.exports = router;
