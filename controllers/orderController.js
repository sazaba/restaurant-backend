const Order = require('../models/Order')

const getOrder = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders)

    } catch (error) {
        res.status(500).json(error)

    }

}

const postOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getOrder,
    postOrder

}