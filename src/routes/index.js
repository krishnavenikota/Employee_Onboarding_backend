const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authmiddleware');

// const userController = require('../controllers/userController');
const queryController = require('../controllers/queryController');
const employeeController = require('../controllers/employerController');
const feedbackController = require('../controllers/feedBackController');
const jobsController = require('../controllers/jobsController');
const userController = require('../controllers/userController');
const contributionController = require('../controllers/contributionController');
// router.get('/users', userController.getAllUsers);
// router.post('/users', userController.createUser);
router.post('/saveContent', authenticateToken, queryController.saveData);
router.get('/getContent', authenticateToken, queryController.getData);
router.get(
  '/getEmployerDetails',
  authenticateToken,
  employeeController.getEmployerDetails
);
router.get('/getFeedBack', authenticateToken, feedbackController.getFeedBack);
router.post(
  '/saveEmployerFeedBack',
  authenticateToken,
  feedbackController.saveEmployerFeedBack
);
router.post(
  '/saveProcessFeedBack',
  authenticateToken,
  feedbackController.saveProcessFeedBack
);
router.get('/getJobListings', authenticateToken, jobsController.getJobListings);
router.get('/getUserDetails', authenticateToken, userController.getUserDetails);
router.get(
  '/uploadContribution',
  authenticateToken,
  contributionController.uploadFiles
);
module.exports = router;
