const express = require('express');

const regionHotelsController = require('../controllers/regionHotelsController');
const addCorsHeader = require('../middlewares/addCorsHeader');

const router = express.Router();

router.use(addCorsHeader);

router.route('/').get(regionHotelsController.getRegionHotels);
router.route('/:seflink').get(regionHotelsController.getRegionHotelBySeflink);

module.exports = router;
