const express = require('express');
const router = express.Router();

const loginsControllers = require('../controllers/logins')

router.post('/', (req, res) =>{
    loginsControllers.create(req,res)
})


router.delete('/:id', (req, res) =>{
    loginsControllers.delete(req,res)
})


module.exports = router;
