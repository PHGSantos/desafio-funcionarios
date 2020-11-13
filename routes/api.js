const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

//url do teste  localhost:3000/api/teste
router.get('/teste',apiController.test);

// url do teste localhost:3000/api/teste

router.get('/teste', apiController.test);
router.get('/details',apiController.details);
router.post('/interest',apiController.add);
router.put('/interest/:id',apiController.update);
router.delete('/interest/:id',apiController.delete);


module.exports = router;