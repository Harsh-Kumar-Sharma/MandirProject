const catchAsync = require('../../../utils/catchAsync');
const { shiftsService } = require('../../../services/settings/shift-manager')

// Get all shifts
const getAllShifts = catchAsync(async (req, res) => {
  const shifts = await shiftsService.getAllShifts()
  res.send(shifts);
});


// Create new shift
const createNewShift = catchAsync(async (req, res) => {
  const { shiftName, startTime, endTime } = req.body;
  await shiftsService.createNewShift({ shiftName, startTime, endTime })
  res.send(true);
});

// Update shift
const updateShift = catchAsync(async (req, res) => {
  const { shiftName, startTime, endTime } = req.body;
  const { shiftId } = req.params;
  await shiftsService.updateShiftById(shiftId, { shiftName, startTime, endTime })
  res.send(true);
});

// Delete shift
const deleteShift = catchAsync(async (req, res) => {
  const { shiftId } = req.params
  await shiftsService.deleteShiftByID(shiftId)
  res.send(true);
});


module.exports = {
  getAllShifts,
  createNewShift,
  updateShift,
  deleteShift
};
