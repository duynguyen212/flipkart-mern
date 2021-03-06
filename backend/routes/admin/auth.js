const express = require('express');
const router = express.Router();
const { signin, signup, requireSignin } = require('../../controllers/admin/auth');


router.post('/admin/signin', signin);

router.post('/admin/signup', signup);

module.exports = router;