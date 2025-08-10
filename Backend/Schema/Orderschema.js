const {Schema} = require("mongoose");

const OrderSchema = new Schema({
    name:{
        Type: String,
    },
    qty:{
        type: Number,
        
    },
    price:{
        type: Number,
    },
    mode:{
        Type:String,
    },
});

module.exports = { OrderSchema };