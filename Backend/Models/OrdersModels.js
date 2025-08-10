const {model}= require("mongoose");

const {OrderSchema}= require("../Schema/Orderschema");

const OrdersModel = new model("Order", OrderSchema);

module,exports = { OrdersModel };