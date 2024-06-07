const Joi = require('@hapi/joi');

const createNewShift = {
  body: Joi.object().keys({
    shiftName: Joi.string().required(),
    startTime: Joi.string().required(),
    endTime: Joi.string().required()
  }),
};

module.exports = {
  createNewShift,
};
