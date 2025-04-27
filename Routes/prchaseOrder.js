const router = require("express").Router();
const { purchaseOrderCtr} = require('../Controllers/purchaseOrder');

router.post('/' ,  purchaseOrderCtr);

module.exports = router;