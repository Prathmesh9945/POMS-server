const router = require('express').Router();
const { ProductCtr, getProduct } = require('../Controllers/ProducyCtr')


router.post('/', ProductCtr);
router.get('/', getProduct)

module.exports = router;