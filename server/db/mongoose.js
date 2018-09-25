const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp'); //'mongodb://udemyheroku:Herokuconnect1@ds127894.mlab.com:27894/udemyheroku'

module.exports = {
  mongoose
};
