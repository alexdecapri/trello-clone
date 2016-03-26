//Build out your list schema here:


var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var List = new Schema({
  name: {type: String, required: true}
  // user: [{type: Schema.ObjectId, ref: "User"}]
});

module.exports = mongoose.model("List", List);







//If you want to test the project, comment out your code, and use the code below:

//var Mongoose = require('mongoose');
//var Schema = Mongoose.Schema;
//
//var List = new Schema({
//    name: {
//        type: String,
//        required: true
//    },
//    cards: [{
//        title: {
//            type: String,
//            required: true
//        }
//    }]
//})
//
//module.exports = Mongoose.model('List', List);
