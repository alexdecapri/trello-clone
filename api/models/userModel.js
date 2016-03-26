//Build out your user schema here:

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
  username: {type: String, required: true}
  // lists: [{type: Schema.ObjectId, ref: "List"}]
});

module.exports = mongoose.model("User", User);





//If you want to test the project, comment out your code, and use the code below:


//var Mongoose = require('mongoose');
//var Schema = Mongoose.Schema;
//
//var User = new Schema({
//    username: {
//        type: String,
//        required: true
//    },
//    lists: [{
//        type: Schema.ObjectId,
//        ref: 'List'
//    }]
//})
//
//module.exports = Mongoose.model('User', User);
