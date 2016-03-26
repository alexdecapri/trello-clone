var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
//STEP 1 - Import mongoose here
var mongoose = require("mongoose");
var mongoUri = "mongodb://localhost:27017/betterTodo";
mongoose.connect(mongoUri);
var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
db.on("error", function(err) {
  console.log("Mongoose had this error regarding connection: " + err);
});
db.once("open", function() {
  console.log("connected to db at " + mongoUri);
});

var app = express();
var port = 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'carpediem',
    saveUninitialized: false,
    resave: false
}));

var isAuthenticated = function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        return res.status(403).send('Please login first')
    }
};
//STEP 3 - import your controller modules here
// var listCtrl = require("./api/controllers/listCtrl");
var userCtrl = require("./api/controllers/userCtrl");

//STEP 4 - Build your endpoints here - If you want to test the project,
// you will need to replace your endpoints with those from Section 1 below





/*************** DB ***************/
//STEP 2 - set up your database instance here



app.listen(port, function() {
    console.log('Server listening on port ' + port);
});




///////////////////
//// Section 1 ////
///////////////////

/**************** API *************/
//
//app.post('/auth/login', UserCtrl.login);
//
//app.get('/auth/logout', UserCtrl.logout);
//
//app.get('/api/getLists', isAuthenticated, ListCtrl.getLists)
//
//app.post('/api/addList', isAuthenticated, ListCtrl.addList);
//
//app.post('/api/deleteList', isAuthenticated, ListCtrl.deleteList);
//
//app.post('/api/addCard', isAuthenticated, ListCtrl.addCard);
//
//app.post('/api/deleteCard', isAuthenticated, ListCtrl.deleteCard);
//
//app.post('/api/moveCard', isAuthenticated, ListCtrl.moveCard);

/************ END API *************/
