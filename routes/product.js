const router = require('express').Router();
const { response } = require('express');
const Product = require('../models/Product');

// Get product by id
router.get('/:id', async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    try {
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json(error);
    }
});

// Create product
router.post('/', async(req, res, next) => {
    const newProdct = new Product(req.body);
    try {
        const saveProduct = await newProdct.save();
        res.status(200).json(saveProduct);
    } catch (error) {
        res.status(404).json(error);
    }
});

// Update product
router.put('/:id', async(req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(404).json(error);
    }
});
module.exports = router;
