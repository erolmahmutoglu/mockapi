const express = require('express');

const userController = require('../controllers/userController');
const addCorsHeader = require('../middlewares/addCorsHeader');

const router = express.Router();

router.use(addCorsHeader);

router.route('/').get(userController.getUser);

module.exports = router;
