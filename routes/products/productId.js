const express = require('express')
const { getProdById, putProdById, deleteProdById } = require('../../controllers/productIdController')
const router = express.Router()



router.get('/:id', getProdById)

router.put('/:id', putProdById)

router.delete('/:id', deleteProdById)


module.exports = router