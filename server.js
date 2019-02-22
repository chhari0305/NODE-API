
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api1/model/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
 // console.log('what');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var uri="mongodb+srv://chhari:\chhari\@cluster0-0cndd.mongodb.net/test?retryWrites=true"; 
var options= {

  useNewUrlParser:true
};

mongoose.connect(uri,options).catch(function(err)
{
  if (err)
  {
    console.log('Error'+err);
  }
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api1/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API1 server started on: ' + port);

app.use(function(re,res)
{
  res.status(404).send({url:req.originalUrl + ' not found'})
});