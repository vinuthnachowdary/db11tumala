/*
var express = require('express');
var router = express.Router();

 GET home page. 
router.get('/', function(req, res, next) {
  res.render('vegetable', { title: 'Search Results vegetable' });
});

module.exports = router;
*/

var express = require('express'); 
const vegetable_controlers= require('../controllers/vegetable'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', vegetable_controlers.vegetable_view_all_Page ); 
module.exports = router; 
