const Product = require('../models/Product')

const getProdById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id);
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json(error)

    }

}

const putProdById = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteProdById = async (req, res) => {
    const { id } = req.params
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json('Producto removido')
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getProdById,
    putProdById,
    deleteProdById
}