'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkApply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WorkApply.belongsTo(models.Work, {
        foreignKey: "workId",
        targetKey: "id"
      });
      WorkApply.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id"
      })
    }
  };
  WorkApply.init({
    workId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    message: DataTypes.STRING,
    link: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkApply',
  });
  return WorkApply;
};