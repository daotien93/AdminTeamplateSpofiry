const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, require: true, unique: true },
        desc: { type: String, require: true },
        img: { type: String, require: true},
        category: { type: Array, require: true},
        size: { type: Array, require: true },
        color: { type: Array, require: true },
        price: { type: Number, require: true},
    },
 { timestamps: true}
);

module.exports = mongoose.model('Product', ProductSchema);