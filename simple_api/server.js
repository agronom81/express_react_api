// var sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('sample.db');

// db.serialize(function() {

//   db.run('CREATE TABLE times(date text, name text, status text)');
//   let languages = ['2014', 'name1', 'status1', '2013', 'name2', 'status2', '2012', 'name3', 'status3', '2011', 'name4', 'status4', '2010', 'name5', 'status5', '2009', 'name6', 'status6'];
//   let placeholders = languages.map((language) => '(?, ?, ?)').join(',');
//   console.log(placeholders)
//   let sql = 'INSERT INTO times(date, name, status) VALUES ' + '(?, ?, ?),(?, ?, ?),(?, ?, ?),(?, ?, ?),(?, ?, ?),(?, ?, ?)';
//   console.log(sql);

//   db.run(sql, languages, function(err) {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log(`Rows inserted ${this.changes}`);
//   });

// });

// db.close();

var path = require('path')
var cors = require('cors')
var express = require('express')
var api = require('./api')
var bodyParser = require('body-parser')
var port = 3001

var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api', api)

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:' + port)
})
