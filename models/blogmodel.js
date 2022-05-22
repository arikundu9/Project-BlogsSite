'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blogModel.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    authorId: DataTypes.BIGINT,
    tags: DataTypes.STRING,
    category: DataTypes.STRING,
    subcategory: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN,
    publishedAt: DataTypes.DATE,
    isDeleted: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'blogModel',
  });
  return blogModel;
};