const {model}= require("mongoose");
const {HoldingSchema}= require("../Schema/HoldingSchema");

// This model is used to interact with the 'Holdings' collection in MongoDB
// It allows us to perform CRUD operations on the holdings data
const HoldingsModel=  model("Holding",HoldingSchema); 

module.exports={HoldingsModel};