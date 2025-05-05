const router = require("express").Router();
const supplierCtr = require('../Controllers/supplierCtr');

router.post('/', supplierCtr);

module.exports = router;
