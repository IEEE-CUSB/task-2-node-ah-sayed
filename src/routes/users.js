const express = require('express');
const router = express.Router();

const googleService = require('../services/api_google');
const mailService = require('../services/sendMail');
const userCtr = require('../controllers').user;

router.route('/users')
/* GET users listing. */
.get((req,res,next) => {
    userCtr.getAll()
    .then(users => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(users);
    }, err => next(err))
    .catch(err => {
        res.statusCode = 400;
        next(err)
    });
})

router.route('/user')
.post((req, res, next) => {
    userCtr.create(req)
    .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        googleService.sendUser(user);
        mailService.sendMail(user);
        res.json(user);
    }, err => next(err))
    .catch(err => {
        res.statusCode = 400;
        next(err);
    });
})

.put((req,res) => {
    res.statusCode = 403;
    res.setHeader('Content-Type','application/json');
    res.end('You are not allowed to perform this operation.')
})

.delete((req,res) => {
    res.statusCode = 403;
    res.setHeader('Content-Type','application/json');
    res.end('You are not allowed to perform this operation.')
})

module.exports = router;
