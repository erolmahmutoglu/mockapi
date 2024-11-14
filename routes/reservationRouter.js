const express = require('express');

const reservationController = require('../controllers/reservationController');
const addCorsHeader = require('../middlewares/addCorsHeader');

const router = express.Router();

router.use(addCorsHeader);

router.route('/').get(reservationController.getReservation);

module.exports = router;
