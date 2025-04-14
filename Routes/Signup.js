const router = require('express').Router();
const { signupCtr } = require('../Controllers/signup')

router.post('/', signupCtr);

module.exports = router;