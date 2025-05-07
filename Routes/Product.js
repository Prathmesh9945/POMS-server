const router = require('express').Router();
const { ProductCtr, getProduct, getProductByID, updateProductByID } = require('../Controllers/ProducyCtr')


router.post('/', ProductCtr);
router.get('/', getProduct)
router.get('/:id', getProductByID)
router.patch('/:id', updateProductByID)

module.exports = router;