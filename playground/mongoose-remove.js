const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// 3 ways to remove items from mongoose --
 // Todo.remove({}).then((result) => {
 //   console.log(result);
 // });
 // do not get docs back, just a number
 // these two will also bring us the document
Todo.findOneAndRemove({_id: '5a7b1d6101c9431d6eeb64e6'}).then((todo) => {
  console.log(todo);
})
Todo.findByIdAndRemove('5a7b1d6101c9431d6eeb64e6').then((todo) => {
  console.log(todo);
});
