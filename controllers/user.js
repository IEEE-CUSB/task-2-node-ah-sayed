const User = require('../models').User;

module.exports = {
    create(req, res, next) {
        return User
        .create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            university: req.body.university,
            faculty: req.body.faculty,
            grad_year: req.body.grad_year,
            workshop: req.body.workshop,
            why: req.body.why,
            notes: req.body.notes
        })
        .then(user => {
            res.statusCode = 201;
            res.setHeader('Content-Type','application/json');
            res.json(user)
        }, err => next(err))
        .catch(err => {
            res.statusCode = 400;
            next(err);
        });
    }
};
