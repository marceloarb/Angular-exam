const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductSchema = new mongoose.Schema({
    _id: {type:Number},
    name: { type: String, required: true, minlength: [3, " Name should be At least 3 character "]},
    qty:{type: Number, required: true,min:[0,"Must be greater or equal to 0"]},
    price:{type: Number, required: true,min:[0,"Must be greater or equal to 0"]},
    

},{timestamps: true},{_id:false})
ProductSchema.plugin(AutoIncrement);
ProductSchema.plugin(AutoIncrement, {inc_field: 'id'});


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
