const mongoose = require("mongoose") 
const vegetableSchema = mongoose.Schema({ 
 name: String, 
 color: String, 
 weight: Number 
}) 
 
module.exports = mongoose.model("vegetable", 
vegetableSchema)