const contestRouter = require('express').Router();
const contestController = require('../controllers/contestController');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const upload = require('../utils/fileUpload');

contestRouter.get('/customers', contestController.getCustomersContests);

contestRouter.get(
  '/:contestId',
  basicMiddlewares.canGetContest,
  contestController.getContestById
);

contestRouter.get(
  '/',
  basicMiddlewares.onlyForCreative,
  contestController.getContests
);

contestRouter.put(
  '/:contestId',
  upload.updateContestFile,
  contestController.updateContest
);

module.exports = contestRouter;
