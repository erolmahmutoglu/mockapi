const express = require('express');

const offersController = require('../controllers/offersController');
const addCorsHeader = require('../middlewares/addCorsHeader');

const router = express.Router();

router.use(addCorsHeader);

router.route('/').get(offersController.getOffers);

module.exports = router;
