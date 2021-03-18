'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeOfWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TypeOfWork.belongsToMany(models.Work, {
        through: "WorkTypeOfWorks"
      })
    }
  };
  TypeOfWork.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TypeOfWork',
  });
  return TypeOfWork;
};