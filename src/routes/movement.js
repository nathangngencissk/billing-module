const express = require('express');
const router = express.Router();
const movementController = require('../controllers/movement')();

router.get('/get', movementController.getAll);
router.post('/add', movementController.add);
router.put('/edit/:id', movementController.edit);
router.delete('/delete/:id', movementController.delete);

module.exports = router;
