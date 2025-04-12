const router = require('express').Router();
const { loginCtr } = require('../Controllers/login')

router.post('/', loginCtr);

module.exports = router;