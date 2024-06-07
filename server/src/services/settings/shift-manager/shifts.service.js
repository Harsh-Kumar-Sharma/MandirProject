const { db } = require('../../../models');
const sequelize = require('sequelize')

/**
 * Create new restaurant shift
 * @param {string} shiftName
 * @param {string} startTime
 * @param {string} endTime
 * @returns {Promise}
 */
const createNewShift = async ({ shiftName, startTime, endTime }) => {
  const shiftRes = await db.shifts.findOne({ where: { shift_name: shiftName } });
  if (shiftRes) {
    throw new Error('Shift with same name already exists');
  }

  await db.shifts.create({
    shift_name: shiftName,
    start_time: startTime,
    end_time: endTime,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  })

  return true
};


/**
 * Update existing restaurant shift
 * @param {string} shiftId
 * @param {string} shiftName
 * @param {string} startTime
 * @param {string} endTime
 * @returns {Promise}
 */
const updateShiftById = async (shiftId, { shiftName, startTime, endTime }) => {
  const res = await db.shifts.findOne({ where: { id: shiftId } });
  if (!res) {
    throw new Error('Shift does not exists');
  }

  let updateBody = { updated_at: new Date().toISOString() }
  if (shiftName) updateBody = { ...updateBody, shift_name: shiftName }
  if (startTime) updateBody = { ...updateBody, start_time: startTime }
  if (endTime) updateBody = { ...updateBody, end_time: endTime }

  await db.shifts.update(updateBody, { where: { id: shiftId } });

  return true
};

/**
 * Get all resto shifts
 * @returns Array of shifts
 */
const getAllShifts = async () => {
  const allShifts = await db.shifts.findAll({})

  const response = []

  for (let shift of allShifts) {
    response.push({
      id: shift.dataValues.id,
      shiftName: shift.dataValues.shift_name,
      startTime: shift.dataValues.start_time,
      endTime: shift.dataValues.end_time,
      createdAt: shift.dataValues.created_at,
      updatedAt: shift.dataValues.updated_at,
    })
  }

  return response
}

/**
 * Delete shift by ID
 * @param {*} shiftId
 * @returns status
 */
const deleteShiftByID = async (shiftId) => {
  const res = await db.shifts.findOne({ where: { id: shiftId } });
  if (!res) {
    throw new Error('Shift does not exists');
  }

  await db.shifts.destroy({ where: { id: shiftId } });

  return true
}

module.exports = {
  createNewShift,
  updateShiftById,
  getAllShifts,
  deleteShiftByID
};
