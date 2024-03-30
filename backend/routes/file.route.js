const express = require('express');
const { demo } = require('../controllers/file.controller');

const router = express.Router();

router.route('/demo').get(demo);

module.exports = router