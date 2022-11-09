const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: String, required: true
        },
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1
                },
            },
        ],
    },
)

exports.exports = mongoose.model('CartSchema', CartSchema);