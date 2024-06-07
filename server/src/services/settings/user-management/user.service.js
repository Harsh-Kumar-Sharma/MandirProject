const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const { db } = require('../../../models');

/**
 * get all users
 * @returns users array
 */
const getAllUsers = async () => {
  const users = await db.users.findAll({
    include: [{ model: db.logins }, { model: db.roles, through: db.user_role_mappings }],
  });

  const response = [];

  for (let user of users) {
    response.push({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      mobile: user.mobile,
      email: user.email,
      userName: user.login.username,
      roleName: user.roles[0].role_name,
      status: user.login.status,
      createdAt: user.created_at,
    });
  }

  return response;
};

/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} email
 * @param {string} mobile
 * @param {string} userName
 * @param {string} password
 * @param {string} roleName
 * @returns true
 */
const createNewUser = async (firstName, lastName, email, mobile, userName, password, roleName) => {
  // validate before processing
  const existsUser = await db.users.findOne({
    where: {
      [Op.or]: [
        {
          email: email,
        },
        {
          mobile: mobile,
        },
      ],
    },
  });

  if (existsUser != null) throw new Error('User already exists with the same email or mobile');

  const existsLogin = await db.logins.findOne({
    where: {
      username: userName,
    },
  });
  if (existsLogin != null) throw new Error('Username already taken. Please choose different username.');

  const role = await db.roles.findOne({
    where: {
      role_name: roleName,
    },
  });
  if (role == null) throw new Error('Role does not exists');

  // Create user in users Table
  const userRes = await db.users.create({
    first_name: firstName,
    last_name: lastName,
    email: email,
    mobile: mobile,
    created_at: new Date().toISOString(),
  });

  // Create Login in logins table
  await db.logins.create({
    user_id: userRes.dataValues.id,
    username: userName,
    password: await bcrypt.hash(password, 8),
    status: 'active',
    is_logged_in: false,
  });

  // create user role mapping
  await db.user_role_mappings.create({
    user_id: userRes.dataValues.id,
    role_id: role.id,
  });

  return true;
};

/**
 *
 * @param {*} id
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} email
 * @param {string} mobile
 * @param {string} password
 * @param {string} roleName
 * @param {string} status
 * @returns
 */
const editUser = async (id, firstName, lastName, email, mobile, password, roleName, status) => {
  const userId = id;

  let updateBody = { updated_at: new Date().toISOString() };
  if (firstName) updateBody.first_name = firstName;
  if (lastName) updateBody.last_name = lastName;
  if (email) updateBody.email = email;
  if (mobile) updateBody.mobile = mobile;

  await db.users.update(updateBody, {
    where: {
      id: userId,
    },
  });

  if (roleName) {
    const role = await db.roles.findOne({
      where: {
        role_name: roleName,
      },
    });
    if (role == null) throw new Error('Role does not exists');

    await db.user_role_mappings.update(
      {
        role_id: role.id,
      },
      {
        where: {
          user_id: userId,
        },
      }
    );
  }

  let updateLoginBody = {};
  if (password) updateLoginBody.password = await bcrypt.hash(password, 8);
  if (status) updateLoginBody.status = status;

  await db.logins.update(updateLoginBody, {
    where: {
      user_id: userId,
    },
  });

  return true;
};

// get user by Id
const getUserById = async (id) => {
  const user = await db.users.findOne({
    where: { id: id },
    include: [{ model: db.logins }, { model: db.roles, through: db.user_role_mappings }],
  });

  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    mobile: user.mobile,
    email: user.email,
    userName: user.login.username,
    roleName: user.roles[0].role_name,
    status: user.login.status,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };
};

module.exports = {
  getAllUsers,
  createNewUser,
  editUser,
  getUserById,
};
