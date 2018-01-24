//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('unable to connect to mongo');
  }
  console.log('connected to mongo');


//   db.collection('Todos').find({
//
//     _id: new ObjectID("5a67c530073c41fc440165bb")
//
//   }).toArray().then((docs)=> {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=> {
//   console.log('unable to fetch', err);
// });

// db.collection('Todos').find().count().then((count)=> {
// console.log(`Todos count: ${count}`);
// console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=> {
// console.log('unable to fetch', err);
// });

db.collection('Users').find({
  name: 'Wendy'
}).toArray().then((docs) => {
  console.log('Users');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('unable to find', err);
});
 //db.close();
 });
