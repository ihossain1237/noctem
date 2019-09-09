const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required: true
    },
    image:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('products',ProductSchema);