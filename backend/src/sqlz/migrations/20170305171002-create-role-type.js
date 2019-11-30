module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('UserRoles', {
            id: {
                allowNull: false,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(50),
                unique: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('UserRoles')
};
