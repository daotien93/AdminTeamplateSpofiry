const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    required: true
                },
            },
        ],
        amount: { type: Number, require: true },
        address: { type: String, required: true },
        status: { type: String, default: 'pending'}
    }, { timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema);