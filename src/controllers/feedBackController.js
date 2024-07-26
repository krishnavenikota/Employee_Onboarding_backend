const feedbackModel = require('../models/feedback');

/*

save the feedback from frontend
and show the same 

*/

// Get data from the JSON file
const getFeedBack = (req, res) => {
  const data = feedbackModel.readFeedBack();
  res.json(data);
};

// Save data to the JSON file
const saveEmployerFeedBack = (req, res) => {
  const { name, feedBack } = req.body;

  if (!name || !feedBack) {
    return res.status(400).json({ error: 'Bad Request' });
  }

  // if (!Array.isArray(newData)) {
  //   return res.status(400).json({ error: 'Invalid data format' });
  // }

  feedbackModel.writeEmployerFeedBack(name, feedBack);
  res.status(200).json({ message: 'Data saved successfully!' });
};

// Save data to the JSON file
const saveProcessFeedBack = (req, res) => {
  const { category, feedBack } = req.body;

  if (!category || !feedBack) {
    return res.status(400).json({ error: 'Bad Request' });
  }

  // if (!Array.isArray(newData)) {
  //   return res.status(400).json({ error: 'Invalid data format' });
  // }

  feedbackModel.writeProcessFeedBack(category, feedBack);
  res.status(200).json({ message: 'Data saved successfully!' });
};

module.exports = { getFeedBack, saveEmployerFeedBack, saveProcessFeedBack };
