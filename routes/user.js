const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');

// Update user
router.put('/:id', async (req, res, next) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.decrypt(
            req.body.password,
            proces.env.PASS_SEC
        ).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete usser
router.delete('/:id', async (req, res, next) => {;
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User has been deleted');
    } catch (error) {
        res.status(400).json(error);
    }
});

// Get user by id
router.get('/find/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const  { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;

