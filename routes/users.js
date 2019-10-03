const express = require('express');
const router = express.Router();

const userCtr = require('../controllers').user;

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
})

.post('/user', userCtr.create)

.put('/user', (req,res) => {
    res.statusCode = 403;
    res.setHeader('Content-Type','application/json');
    res.end('You are not allowed to perform this operation.')
})

.delete('/user', (req,res) => {
    res.statusCode = 403;
    res.setHeader('Content-Type','application/json');
    res.end('You are not allowed to perform this operation.')
})

module.exports = router;
