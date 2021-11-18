var vegetable = require('../models/vegetable');
// List of all vegetables
exports.vegetable_list = async function (req, res) {
    try {
        thevegetable = await vegetable.find();
        res.send(thevegetable);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific vegetable.
exports.vegetable_detail = async function (req, res) {
    console.log("detail" + req.params.id)
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
    document.flavour = req.body.flavour;
    document.Cost = req.body.Cost;
    document.quantity = req.body.quantity;
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
exports.vegetable_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await vegetable.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle vegetable update form on PUT.
exports.vegetable_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await vegetable.findById(req.params.id)
        // Do updates of properties
        if (req.body.flavour)
            toUpdate.flavour = req.body.flavour;
        if (req.body.Cost) toUpdate.Cost = req.body.Cost;
        if (req.body.quantity) toUpdate.size = req.body.quantity;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
};

// VIEWS
// Handle a show all view
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

// Handle a show one view with id specified by query
exports.vegetable_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await vegetable.findById( req.query.id)
    res.render('vegetabledetail',
   { title: 'Vegetable Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };