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
router.delete('/:id', async (req, res, next) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json('Delete success');
    } catch (error) {
        res.status(404).json(error);
    }
});

// Update a cart
router.put('/:id', async (req, res, next) => {
    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {
                new: true
            }
        );
        res.status(200).json(updateCart);
    } catch (error) {
        res.status(404).json(error);
    }
});

// Get user cart
router.get('/find/:userId',  async (req, res, next) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
});

  
module.exports = router;