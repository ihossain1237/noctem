const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    items: {
        type: Array,
        required: true
    },
    email:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('carts',CartSchema);