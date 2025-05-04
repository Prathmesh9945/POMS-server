const router = require("express").Router();
const { purchaseOrderCtr, getPurchaseOrderCtr } = require('../Controllers/purchaseOrder');

router.post('/', purchaseOrderCtr);

router.get("/", getPurchaseOrderCtr);

module.exports = router;