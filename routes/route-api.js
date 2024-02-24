const express = require('express');
const router = express.Router();
const { hashPassword, comparePassword, generateToken, healthCheck } = require('../controller/api-controller');

router.get('/v1/', healthCheck)
router.post('/v1/hash', hashPassword);
router.post('/v1/compare', comparePassword);
router.post('/v1/token', generateToken);

module.exports = router;

