var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
db.serialize(function () {
  db.run("CREATE TABLE rounds (id INTEGER PRIMARY KEY, course_id INTEGER, total_score INTEGER)");
  db.run("CREATE TABLE courses (id INTEGER PRIMARY KEY, name TEXT, holes INTEGER, par INTEGER, address TEXT)");
  db.run("CREATE TABLE holes (id INTEGER PRIMARY KEY, number INTEGER, course_id INTEGER, par INTEGER)");
  db.run("CREATE TABLE scores (id INTEGER PRIMARY KEY, filename TEXT, location TEXT, owner INTEGER)");
  db.run("INSERT INTO courses (name, holes, par, address) VALUES (?, ?, ?, ?)", "Roots Disc Golf Course", 18, 54, "Some place on redwood road");
});

var port = 4000;


router.get('/courses', function(req, res) {
  db.all("SELECT * FROM courses", function(err, rows){
    res.json({ courses: rows });
  });
});

router.get('/courses/:id', function(req, res) {
  db.get("SELECT * FROM courses WHERE id = (?)", [req.params.id], function(err, row){
    res.json({ course: row});
  });
});

app.use('/api', router);

app.listen(port);
console.log("Server started on " + port);

module.exports = app;
