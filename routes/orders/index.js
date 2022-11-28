const express = require('express')
const { getOrder, postOrder } = require('../../controllers/orderController')
const router = express.Router()

router.get('/', getOrder)

router.post('/', postOrder)


module.exports = router