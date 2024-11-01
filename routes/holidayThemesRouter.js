const express = require('express');

const holidayThemesController = require('../controllers/holidayThemesController');
const addCorsHeader = require('../middlewares/addCorsHeader');

const router = express.Router();

router.use(addCorsHeader);

router.route('/').get(holidayThemesController.getThemes);

module.exports = router;
