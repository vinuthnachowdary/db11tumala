var vegetable = require('../models/vegetable');

// List of all vegetable 
exports.vegetable_list = async function (req, res) {
    try {
        vegetable = await vegetable.find();
        res.send(vegetable);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// for a specific vegetable. 
exports.vegetable_detail = async function (req, res) {
    vegetable.log("detail" + req.params.id)
    try {
        result = await vegetable.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle vegetable create on POST. 
exports.vegetable_create_post = async function (req, res) {
    console.log(req.body)
    let document = new vegetable();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"vegetable_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name;
    document.color = req.body.color;
    document.weight = req.body.weight;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle vegetable delete form on DELETE. 
exports.vegetable_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: vegetable delete DELETE ' + req.params.id);
};

// Handle vegetable update form on PUT. 
exports.vegetable_update_put =  async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await vegetable.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
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


exports.vegetable_view_all_Page = async function (req, res) {
    try {
        thevegetable = await vegetable.find();
        res.render('vegetable', { title: 'vegetable Search Results', results: thevegetable });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

