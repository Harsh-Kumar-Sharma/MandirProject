const express = require('express');
const areaManagerRoutes = require('./settings/area-manager');
const menuManagerRoutes = require('./settings/menu-manager');
const deviceManagerRoutes = require('./settings/device-manager');
const organizationProfileRoutes = require('./settings/organization-profile');
const shiftManagerRoutes = require('./settings/shift-manager');
const userRoute = require('./settings/user-management');

const router = express.Router();

router.use('/area-manager', areaManagerRoutes);
router.use('/menu-manager', menuManagerRoutes);
router.use('/device-manager', deviceManagerRoutes);
router.use('/organization-profile', organizationProfileRoutes);
router.use('/shift-manager', shiftManagerRoutes);
router.use('/user-management', userRoute);

module.exports = router;
