const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const createUser = async (userData) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);
  const newUser = new User({ ...userData, password: hashedPassword });
  return await newUser.save();
};

module.exports = {
  createUser,
};
