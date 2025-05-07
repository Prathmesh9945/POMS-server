const router = require("express").Router();
const supplierCtr = require('../Controllers/supplierCtr');

router.post('/', supplierCtr);
router.get('/', getSupplierCtr);
router.put('/', supplierCtr.updateSupplierCtr);
router.delete('/', supplierCtr.deleteSupplierByIdCtr)

module.exports = router;
