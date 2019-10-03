'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        mobile: {
            type: DataTypes.INTEGER,
        },
        university: {
            type: DataTypes.STRING,
        },
        faculty: {
            type: DataTypes.STRING,
        },
        grad_year: {
            type: DataTypes.INTEGER,
        },
        workshop: {
            type: DataTypes.STRING,
        },
        why: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        notes: {
            type: DataTypes.STRING,
            defaultValue: null
        }
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};