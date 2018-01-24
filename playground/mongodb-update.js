//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('unable to connect to mongo');
  }
  console.log('connected to mongo');
//findOneAndUpdate
db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID("5a67c530073c41fc440165bb")
}, {
  $inc: {
    age: 3,
    feet: 4,
    ears: 2
  }
}).then((result) => {
  console.log(result);
});
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5a67c530073c41fc440165bb")
// },{
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result)=> {
//   console.log(result);
// });
 //db.close();
 });
