const mongoose = require("mongoose") 
const vegetableSchema = mongoose.Schema({ 
 name: {type:String, required:true}, 
 color: String, 
 weight: { type: Number, min: 1, max: 30, default: 0 },
}) 
 
module.exports = mongoose.model("vegetable", 
vegetableSchema)