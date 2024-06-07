const express = require('express');
const validate = require('../../../middlewares/validate')
const shiftValidation = require('../../../validations/settings/shift-manager/shifts.validation')
const { shiftsController } = require('../../../controllers/settings/shift-manager');

const router = express.Router();

router.get('/', shiftsController.getAllShifts);
router.post('/', validate(shiftValidation.createNewShift), shiftsController.createNewShift);
router.put('/:shiftId', shiftsController.updateShift);
router.delete('/:shiftId', shiftsController.deleteShift);

module.exports = router;
