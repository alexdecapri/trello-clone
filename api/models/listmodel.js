// Build out your model here:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var List = new Schema({
  name: {
    type: String,
    required: true
  },
  cards: [{
    type: String,
    required, true
  }]
})

module.exports = mongoose.model("List", List);
