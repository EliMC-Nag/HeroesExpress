const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/',mainController.home);
router.get('/creditos',mainController.creditos);

module.exports = router;