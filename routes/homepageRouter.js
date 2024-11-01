const express = require('express');

const homepageController = require('../controllers/homepageController');
const addCorsHeader = require('../middlewares/addCorsHeader');

const router = express.Router();

router.use(addCorsHeader);

router.route('/').get(homepageController.getHomepage);

module.exports = router;
