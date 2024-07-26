const googleStorage = require('../utils/googleCloudStorage');

const uploadFiles = (req, res) => {
  if (!path || !type) {
    res.status(400).json({ message: 'Bad Request' });
  }

  const { path, type } = req.body;

  googleStorage
    .uploadFile(path, `ltcresourcefilebucket/${type}`)
    .then(() => {
      res.json({ status: 200 });
      console.log('File uploaded successfully');
    })
    .catch((err) => console.error('Error uploading file:', err));
};

module.exports = { uploadFiles };
