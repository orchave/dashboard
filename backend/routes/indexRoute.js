const express = require('express');

const router = express.Router();

const endpointsGetController = require('../controllers/endpoints/get');

const pushPostController = require('../controllers/push/post');

router.get(
  '/get-endpoints',
    endpointsGetController
);

router.post(
  '/push-endpoint',
    pushPostController
);

module.exports = router;
