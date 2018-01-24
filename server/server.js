var {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos)=> {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});
//GET /todos/12345
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //valid id useing isValid
  //if not valid stop function and respond with 404
if (!ObjectID.isValid(id)) {
   res.status(404).send();
}
   Todo.findById(id).then((todo) => {
     if (!todo) {
     return res.status(404).send();
   }

   res.send({todo});

 }).catch((e) => {
  res.status(400).send();
   //find by id
 });
});
//success
     //if todo send back
     //if no todo send a 404 --
   //error
     //400 -and send empty body back

 //res.send(req.params);

 //var id = '5a680d03f6fdae185b20483f';





app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
