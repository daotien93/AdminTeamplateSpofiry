const Cart = require('../models/Cart');
const router = require('express').Router();

// Create a new cart
router.post('/', async (req, res, next) => {
    const newCart = new Cart(req.body);
    try {
        const saveCart = await newCart.save();
        res.status(200).json(saveCart);
    } catch (error) {
        res.status(404).json(error);
    }
});

// Delete a cart
router.get('/:id', async (req, res, next) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(404).json(error);
    }
});


module.exports = router;