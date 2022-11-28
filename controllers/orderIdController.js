const Order = require('../models/Order')


const getOrderById = async (req, res) => {
    const { id } = req.params
    try {
        const order = await Order.findById(id);
        res.status(200).json(order)

    } catch (error) {
        res.status(500).json(error)

    }

}

const putOrderById = async (req, res) => {
    const { id } = req.params
    try {
        const order = await Order.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(order)

    } catch (error) {
        res.status(500).json(error)

    }

}

const deleteOrderById = async (req, res) => {
    const { id } = req.params
    try {
        await Order.findByIdAndDelete(id);
        res.status(200).json('Orden removida')
    } catch (error) {
        res.status(500).json(error)
    }

}


module.exports = {
    getOrderById,
    putOrderById,
    deleteOrderById
}

