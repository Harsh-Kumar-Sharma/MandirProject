const express = require('express');
const authRoute = require('./auth.route');
const settingsRoute = require('./settings.route');
const inventoryRoute = require('./inventory.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/settings', settingsRoute);
router.use('/inventory', inventoryRoute);

module.exports = router;
