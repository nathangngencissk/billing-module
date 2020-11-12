const express = require('express');
const router = express.Router();
const titleController = require('../controllers/title')();

router.get('/get', titleController.getAll);
router.post('/add', titleController.add);
router.put('/edit/:id', titleController.edit);
router.delete('/delete/:id', titleController.delete);
router.post('/pay/:id', titleController.pay);

module.exports = router;
