const mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/product', {useNewUrlParser: true});
module.exports = mongoose;