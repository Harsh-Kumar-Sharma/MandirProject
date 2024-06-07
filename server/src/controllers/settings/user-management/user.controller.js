const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const { userService } = require('../../../services');

// get all users
const getAllUsers = catchAsync(async (req, res) => {
  const users = await userService.getAllUsers();
  res.send(users);
});

// create a new user
const createNewUser = catchAsync(async (req, res) => {
  const { firstName, lastName, email, mobile, userName, password, roleName } = req.body;
  const user = await userService.createNewUser(firstName, lastName, email, mobile, userName, password, roleName);
  res.send(user);
});

// edit a user
const editUser = catchAsync(async (req, res) => {
  const { id, firstName, lastName, email, mobile, password, roleName, status } = req.body;
  const user = await userService.editUser(id, firstName, lastName, email, mobile, password, roleName, status);
  res.send(user);
});

//get User by ID
const getUserById = catchAsync(async (req, res) => {
  const getuserbyid = await userService.getUserById(req.params.id);
  res.send(getuserbyid);
});

module.exports = {
  getAllUsers,
  createNewUser,
  editUser,
  getUserById,
};
