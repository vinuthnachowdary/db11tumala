var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var vegetable_controller = require('../controllers/vegetable'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// VEGETABLE ROUTES /// 
 
// POST request for creating a vegetable.  
router.post('/vegetable', vegetable_controller.vegetable_create_post); 
 
// DELETE request to delete vegetable. 
router.delete('/vegetable/:id', vegetable_controller.vegetable_delete); 
 
// PUT request to update vegetable. 
router.put('/vegetable/:id', vegetable_controller.vegetable_update_put); 
 
// GET request for one vegetable. 
router.get('/vegetable/:id', vegetable_controller.vegetable_detail); 
 
// GET request for list of all vegetable items. 
router.get('/vegetable', vegetable_controller.vegetable_list); 
 
// GET request for one vegetable. 
router.get('/vegetable/:id', vegetable_controller.vegetable_detail);

module.exports = router;