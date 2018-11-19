const {courses, holes} = require('./seed');

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
  // Setup Courses Table
  db.run("CREATE TABLE courses (id INTEGER PRIMARY KEY, name TEXT, holes INTEGER, par INTEGER, address TEXT)");
  courses.forEach((course) => db.run("INSERT INTO courses (name, holes, par, address) VALUES (?, ?, ?, ?)", course));

  // Setup Holes Table
  db.run("CREATE TABLE holes (id INTEGER PRIMARY KEY, number INTEGER, course_id INTEGER, par INTEGER)");
  holes.forEach((hole) => db.run("INSERT INTO holes (number, course_id, par) VALUES (?, ?, ?)", hole));

  // Setup Rounds Table
  db.run("CREATE TABLE rounds (id INTEGER PRIMARY KEY, course_id INTEGER, total_score INTEGER)");

  // Setup Scores Table
  db.run("CREATE TABLE scores (id INTEGER PRIMARY KEY, points INTEGER, round_id INTEGER, hole_id INTEGER)");
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

router.get('/courses/:id/holes', function(req, res) {
  db.all("SELECT * FROM holes WHERE course_id = (?)", [req.params.id], function(err, rows){
    res.json({ course: { holes: rows }});
  });
});

app.use('/api', router);

app.listen(port);
console.log("Server started on " + port);

module.exports = app;
