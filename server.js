var express = require('express');
var session = require('express-session');
// Step 1 - Require your middleware modules here
var cors = require("cors");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var app = express();
var port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));


// Step 2 - Congfigure your middleware here

app.use(express.static(__dirname + '/public'));

// Step 3 - Test your server, then remove this endpoint, and paste the "Section One" code from below here

/************* API *************/

//------Remove after testing your server-------//

app.get('/api/test', function(req, res) {
    res.send("The request was successful!");
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});

// STEP 4 - Build out the login page in your Angular app as directed in the project guide
// When you are finished with those instructions, use the commented out code to connect the
// login function to the backend, and retest the full app to makes sure you have done
// everything correctly!



/////////////////////
//// SECTION ONE ////
/////////////////////

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
}


// /**************** API Controller *************/
var UserCtrl = require('./api/controllers/userCtrl.js');
var ListCtrl = require('./api/controllers/listCtrl.js')


// /**************** API *************/

app.post('/auth/login', UserCtrl.login);

// app.get('/auth/logout', UserCtrl.logout);

app.get('/api/getLists', isAuthenticated, ListCtrl.getLists)

// app.post('/api/addList', isAuthenticated, ListCtrl.addList);

// app.post('/api/deleteList', isAuthenticated, ListCtrl.deleteList);

// app.post('/api/addCard', isAuthenticated, ListCtrl.addCard);

// app.post('/api/deleteCard', isAuthenticated, ListCtrl.deleteCard);

// app.post('/api/moveCard', isAuthenticated, ListCtrl.moveCard);

// /************ END API *************/


// /*************** DB ***************/
var mongoUri = 'mongodb://localhost:27017/betterTodo';
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log('connected to db at ' + mongoUri)
});
