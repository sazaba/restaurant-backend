const express = require('express')
const { getOrderById, putOrderById, deleteOrderById } = require('../../controllers/orderIdController')
const router = express.Router()


router.get('/:id', getOrderById)

router.put('/:id', putOrderById)

router.delete('/:id', deleteOrderById)

module.exports = router
