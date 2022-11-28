const express = require('express')
const { getProd, postProd } = require('../../controllers/productController')
const router = express.Router()


router.get('/',
    getProd
)

router.post('/',
    postProd
)


module.exports = router