const User = require('../models').User;

exports.create = async (req) => {
        return await User.create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            university: req.body.university,
            faculty: req.body.faculty,
            grad_year: req.body.grad_year,
            workshop: req.body.workshop,
            why: req.body.why,
            notes: req.body.notes
        });
}
exports.getAll =  async () => {
    return await User.findAll({});
}

