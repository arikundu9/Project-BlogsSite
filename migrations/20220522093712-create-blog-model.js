'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blogModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      authorId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'authorModel', key: 'id' }
      },
      tags: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subcategory: {
        type: Sequelize.STRING,
      },
      isPublished: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      publishedAt: {
        type: Sequelize.DATE,
        allowNull: null,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      deletedAt: {
          type: Sequelize.DATE, 
          default: null
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blogModels');
  }
};