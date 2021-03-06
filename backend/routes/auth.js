const express = require('express');
const router = express.Router();
const { signin, signup, requireSignin } = require('../controllers/auth');


router.post('/signin', signin);

router.post('/signup', signup);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'Profile' });
// });

module.exports = router;