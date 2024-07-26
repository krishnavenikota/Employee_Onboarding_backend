const userModel = require('../models/user');

const getUserDetails = (req, res) => {
  const data = userModel.readUserData();
  res.json(data);
};

module.exports = { getUserDetails };
