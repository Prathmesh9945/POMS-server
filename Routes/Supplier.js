const router = require("express").Router();

const {
  supplierCtr,
  getSupplierCtr,
  getSupplierByIdCtr,
  updateSupplierByIdCtr,
  deleteSupplierByIdCtr,
  insertManySuppliersCtr,
  deactivateSupplierById

} = require('../Controllers/supplierCtr');

router.post('/', supplierCtr);
router.get('/', getSupplierCtr);
router.put('/:id', getSupplierByIdCtr);
router.delete('/', deleteSupplierByIdCtr);
router.patch('/:id', updateSupplierByIdCtr);
router.post('/insert-many', insertManySuppliersCtr);
router.put('/deactivate/:id' , deactivateSupplierById)

module.exports = router;
