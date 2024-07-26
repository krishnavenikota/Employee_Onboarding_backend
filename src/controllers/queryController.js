const queryModel = require('../models/query');

const getData = (req, res) => {
  const data = queryModel.readData();
  res.json(data);
};


const saveData = (req, res) => {
  const newData = req.body;
  const { query, category, person } = newData;

  if (!query || !category || !person) {
    return res.status(400).json({ error: 'Bad Request' });
  }

  queryModel.writeData(query, category, person);
  res.status(200).json({ message: 'Data saved successfully!' });
};

module.exports = { getData, saveData };
