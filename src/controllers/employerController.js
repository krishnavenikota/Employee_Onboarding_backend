const employerModel = require('../models/employer');

const getEmployerDetails = (req, res) => {
  const { name } = req.query;
  const data = employerModel.getEmployerDetails(name);
  res.json(data);
};

module.exports = { getEmployerDetails };
