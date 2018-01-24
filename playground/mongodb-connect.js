//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// example of destructuring. also see notes
// var user = {name: 'wendy', age: 50};
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('unable to connect to mongo');
  }
  console.log('connected to mongo');

//   db.collection('Todos').insertOne({
//     text: 'something to do',
//     completed: false
//
//   }, (err, result)=>{
//     if (err) {
//     return console.log('unable to insert', err);
// }
//   console.log(JSON.stringify(result.ops, undefined, 2));
//   });
//insert new doc into Users (name, age, location)
// db.collection('Users').insertOne({
//   name: 'Wendy',
//   age: 50,
//   location: 'Nelson'
//
// }, (err, result) => {
//   if (err) {
//     return console.log('unable to insert', err);
//
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp());
// });
//   db.close();
 });
