var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var vegetable_controller = require('../controllers/vegetable'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// VEGETABLE ROUTES /// 
 
// POST request for creating a vegetable.  
router.post('/resource/vegetable', vegetable_controller.vegetable_create_post); 
 
// DELETE request to delete vegetable. 
router.delete('/resource/vegetable/:id', vegetable_controller.vegetable_delete); 
 
// PUT request to update vegetable. 
router.put('/resource/vegetable/:id', vegetable_controller.vegetable_update_put); 
 
// GET request for one vegetable. 
router.get('/resource/vegetable/:id', vegetable_controller.vegetable_detail); 
 
// GET request for list of all vegetable items. 
router.get('/resource/vegetable', vegetable_controller.vegetable_list); 
 
// GET request for one vegetable. 
router.get('/vegetable/:id', vegetable_controller.vegetable_detail);

module.exports = router; 

exports.vegetable_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Costume.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.costume_type)  
               toUpdate.name = req.body.name; 
        if(req.body.color) toUpdate.color = req.body.color; 
        if(req.body.weight) toUpdate.weight = req.body.weight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
 
