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

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET vegetable */ 
router.get('/', vegetable_controlers.vegetable_view_all_Page ); 
/* GET detail vegetable page */
router.get('/detail', vegetable_controlers.vegetable_view_one_Page);
/* GET create vegetable page */
router.get('/create',secured, vegetable_controlers.vegetable_create_Page);
/* GET create update page */
router.get('/update',secured, vegetable_controlers.vegetable_update_Page);
/* GET create vegetable page */
router.get('/delete',secured, vegetable_controlers.vegetable_delete_Page);

module.exports = router; 
