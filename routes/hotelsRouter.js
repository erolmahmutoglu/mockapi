const express = require('express');

const hotelsController = require('../controllers/hotelsController');
const addCorsHeader = require('../middlewares/addCorsHeader');

const router = express.Router();

router.use(addCorsHeader);

router.route('/').get(hotelsController.getHotels);
router.route('/:seflink').get(hotelsController.getHotelBySeflink);

module.exports = router;
