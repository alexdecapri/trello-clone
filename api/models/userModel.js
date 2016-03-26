// Build out your model here:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
  "username": {
    type: String,
    required: true
  },
  "lists": [{
    type: Schema.ObjectId,
    ref: "List"
  }]
});

module.exports = mongoose.model("User", User);
