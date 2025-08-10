const {model}= require("mongoose");

const {PositionSchema}= require("../Schema/PositionSchema");

const PositionsModel = model("Position", PositionSchema);

module.exports = { PositionsModel };