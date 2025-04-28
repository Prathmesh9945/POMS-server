const router = require('express').Router();
const { POctr } = require('../Controllers/POctr')

router.post("/", POctr);


module.exports = router;