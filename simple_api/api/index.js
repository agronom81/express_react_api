const router = require('express').Router()
const sqlite3 = require('sqlite3').verbose();

router.get('/status', function(req, res, next) {
  let db = new sqlite3.Database('sample.db');
  let sql = `SELECT DISTINCT date, name, status FROM times`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
})

router.get('/status/:date', function(req, res, next) {
  let db = new sqlite3.Database('sample.db');
  let sql = `SELECT DISTINCT date, name, status FROM times WHERE date LIKE ${req.params.date}`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
})

router.get('/date', function(req, res, next) {
  let db = new sqlite3.Database('sample.db');
  let sql = `SELECT DISTINCT date FROM times`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
})

module.exports = router
