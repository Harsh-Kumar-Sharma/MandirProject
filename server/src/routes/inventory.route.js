const express = require('express');
const groupsRoute = require('./inventory/groups.route');
const itemsRoute = require('./inventory/items.route');

const router = express.Router();

router.use('/groups', groupsRoute);
router.use('/items', itemsRoute);

module.exports = router;
