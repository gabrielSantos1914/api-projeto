
const express = require('express');

const router = express.Router();

const clientsController = require('../controllers/clients')


router.get('/', (req, res) => {
    clientsController.getAll(req, res)
});
router.get('/:id', (req, res) => {
    clientsController.get(req, res)
});

router.post('/', (req, res) => {
    clientsController.create(req, res)
});

module.exports = router