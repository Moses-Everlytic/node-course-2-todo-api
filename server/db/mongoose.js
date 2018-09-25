const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://udemyheroku:Herokuconnect1@ds127894.mlab.com:27894/udemyheroku' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
