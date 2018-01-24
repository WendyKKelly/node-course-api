//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('unable to connect to mongo');
  }
  console.log('connected to mongo');

// deleteMany
// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });
//
// db.collection('Todos').deleteOne({text: 'walk dog'}).then((result )=> {
//   console.log(result);
// });
//
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });
db.collection('Users').deleteMany({age: 50});
db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5a66c0c1cacbdd174c676eda")
}).then((results => {
  console.log(JSON.stringify(results, undefined, 2));
}));


//deleteOne
//findOneAndDelete
 //db.close();
 });
