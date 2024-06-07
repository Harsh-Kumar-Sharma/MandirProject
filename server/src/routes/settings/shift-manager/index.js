const express = require('express');
const shiftRoutes = require('./shifts.route');

const router = express.Router();

router.use('/shifts', shiftRoutes);

module.exports = router;
