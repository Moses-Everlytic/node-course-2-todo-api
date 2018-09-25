const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });


Todo.findOneAndDelete({_id: '5ba9f0dd867f1816b78785ce'}).then((result) => {
  console.log(result)
});
