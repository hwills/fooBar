
/*creates database accessor object */

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'sql5.freesqldatabase.com',
  user     : 'sql590678',
  password : 'gH6!dJ2!',
  database : 'sql590678'
});

connection.connect();


/*example query
connection.query('show tables', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});
*/

module.exports = connection;