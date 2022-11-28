const Product = require('../models/Product')

const getProd = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json(error)

    }
}

const postProd = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getProd,
    postProd
}