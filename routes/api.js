const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

//url do teste  localhost:3000/api/teste
router.get('/teste',apiController.test);

module.exports =router;