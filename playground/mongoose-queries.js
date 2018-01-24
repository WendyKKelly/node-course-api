const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



var id = '5a680d03f6fdae185b20483f';
//
// if (!ObjectID.isValid(id)) {
//   console.log('id not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });
User.findById(id).then((user) => {
  if(!user){
    return console.log('Id not found');
  }
  console.log('user by id', user);
}).catch((e) => console.log(e));
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));
//user.findById
