const { route } = require('./product');

const Cart = requre('../models/Cart');
const router = require('express').Router();

// Create a new cart
router.post('/', async (req, res, next) => {
    const newCart = new Cart(req.body);
    try {
        const saveCart = newCart.save();
        res.status(200).json(saveCart);
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;