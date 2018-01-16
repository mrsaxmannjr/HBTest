var express = require('express');
var router = express.Router();
var arr = [
  { name: "James", age: "34" },
  { name: "John", age: "30" },
  { name: "Jack"},
  { name: "Jerry", age: "32" },
  { name: "Jason", age: "33" }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', jNames: arr });
});

module.exports = router;
