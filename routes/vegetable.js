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
 
/* GET vegetable */ 
router.get('/', vegetable_controlers.vegetable_view_all_Page ); 
/* GET detail vegetable page */
router.get('/detail', vegetable_controlers.vegetable_view_one_Page);
/* GET create vegetable page */
router.get('/create', vegetable_controlers.vegetable_create_Page);
/* GET create update page */
router.get('/update', vegetable_controlers.vegetable_update_Page);
/* GET create vegetable page */
router.get('/delete', vegetable_controlers.vegetable_delete_Page);

module.exports = router; 
