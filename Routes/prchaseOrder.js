const router = require("express").Router();
const { purchaseOrderCtr, getPurchaseOrderCtr, getPurchaseOrderById, updatePurchaseOrderCtr } = require('../Controllers/purchaseOrder');
const { route } = require("./Signup");

router.post('/', purchaseOrderCtr);
router.get("/", getPurchaseOrderCtr);
router.get("/:id", getPurchaseOrderById);
router.patch("/:id", updatePurchaseOrderCtr)

module.exports = router;