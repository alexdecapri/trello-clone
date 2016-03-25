var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
// STEP 1 - Import the mongojs library here
var mongojs = require("mongojs");



var app = express();
// STEP 2 - Define the "db" variable here, and define the MongoDB instance you want to use
var db = mongojs("trello-clone", ["lists"]);


var port = 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// STEP 3 - Build your server's endpoints with all the database commands here
app.get("/api/list", function(req, res) {
  db.lists.find(function(err, response) {
    if(err) {
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });
});

app.post("/api/list", function(req, res) {
  db.lists.save(req.body, function(err, response) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  })
});

app.put("/api/list", function(req, res) {
  db.lists.findAndModify({
    query: {
      _id: mongojs.ObjectId(req.query.id)
    },
    update: {
      $set: req.body
    },
  }, function(err, response) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });
});

app.delete("/api/list", function(req, res) {
  db.lists.remove({ _id: mongojs.ObjectId(req.query.id) }, function(err, response) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(response); //could use res.send and get same result formatted as json (Because body-parser is running!!!)
    }
  });
});


//STEP 4 - In your terminal, run 'mongod', then in a new tab run 'nodemon server.js'. This will start up your
// database instance, and then your Node server. Then, in postman, you can test all of the endpoints you just built.
// While you test the endpoints, you can you RoboMongo to make sure they are working.


app.listen(port, function() {
    console.log('Server listening on port ' + port);
});


//STEP 5 - What you built today won't be used in the final project. That is because in the next two classes, we
// will show you better ways to handle what we have done. Now... Before you say "Well, we should learn that way
// first, shouldn't we?", just know that there is wisdom to taking this one step at a time. What we learn in the
// next couple classes will build from what you have learned today. With all of that said, you can use the code
// from below to build the full app again, and run it, if you would like. You should, at this point, be able to
// plug in the code below into the right places above. You will want to comment out, or delete all of your code
// first though. That way it won't mess up any of the code for the full app.


///////////////////
//// SECTION 1 ////
///////////////////

// var session = require('express-session');
// var mongoose = require('mongoose');



///////////////////
//// SECTION 2 ////
///////////////////

// app.use(session({
//     secret: 'carpediem',
//     saveUninitialized: false,
//     resave: false
// }));

// var isAuthenticated = function (req, res, next) {
//     if (req.session.user) {
//         next();
//     } else {
//         return res.status(403).send('Please login first')
//     }
// }


// /**************** API Controller *************/
// var UserCtrl = require('./api/controllers/UserCtrl.js');
// var ListCtrl = require('./api/controllers/ListCtrl.js')


// /**************** API *************/

// app.post('/auth/login', UserCtrl.login);

// app.get('/auth/logout', UserCtrl.logout);

// app.get('/api/getLists', isAuthenticated, ListCtrl.getLists)

// app.post('/api/addList', isAuthenticated, ListCtrl.addList);

// app.post('/api/deleteList', isAuthenticated, ListCtrl.deleteList);

// app.post('/api/addCard', isAuthenticated, ListCtrl.addCard);

// app.post('/api/deleteCard', isAuthenticated, ListCtrl.deleteCard);

// app.post('/api/moveCard', isAuthenticated, ListCtrl.moveCard);

// /************ END API *************/


// /*************** DB ***************/
// var mongoUri = 'mongodb://localhost:27017/betterTodo';
// mongoose.connect(mongoUri);
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function() {
//     console.log('connected to db at ' + mongoUri)
// })
