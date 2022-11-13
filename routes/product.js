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

// Get all products
router.get('/', async (req, res, next) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;
