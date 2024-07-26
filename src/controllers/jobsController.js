const jobListingsModel = require('../models/jobs');

const getJobListings = (req, res) => {
  const data = jobListingsModel.getJobListings();
  res.json(data);
};

module.exports = { getJobListings };
