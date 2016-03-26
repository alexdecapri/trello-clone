// Build out your model here:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
  "username": {
    type: String,
    required: true
  },
  "lists": [{
    type: Schema.Types.ObjectId, //check this too
    ref: "List" //don't need to require listmodel to use this
  }]
});

module.exports = mongoose.model("User", User);
