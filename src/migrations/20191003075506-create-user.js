'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING,
            },
            mobile: {
                type: Sequelize.INTEGER,
            },
            university: {
                type: Sequelize.STRING,
            },
            faculty: {
                type: Sequelize.STRING,
            },
            grad_year: {
                type: Sequelize.INTEGER,
            },
            workshop: {
                type: Sequelize.STRING,
            },
            why: {
                type: Sequelize.STRING,
            },
            notes: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};