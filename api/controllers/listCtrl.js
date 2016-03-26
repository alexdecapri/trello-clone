// Build out your controller here:
// var _ = require("underscore");
// var ObectId = require("mongodb").ObjectId;

var List = require("../models/listmodel");
var User = require("../models/userModel");

module.exports = {
  getLists: function(req, res) {
    var user = req.session.user;
    User.findById(User._id)
      .populate("lists")
      .exec(function(err, foundUser) {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        } else return res.send(200).json(foundUser)

      })
  }
}
