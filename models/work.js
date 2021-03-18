'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Work.belongsTo(models.Company),
        Work.belongsToMany(models.User, {
          through: "SaveWorks"
        }),
        Work.belongsToMany(models.Tag, {
          through: "TagWorks"
        }),
        Work.belongsToMany(models.TypeOfWork, {
          through: "WorkTypeOfWorks"
        })
    }
  };
  Work.init({
    companyId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Company",
        key: "id"
      }
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    addressGoogle: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    price: DataTypes.STRING,
    request: DataTypes.STRING,
    interest: DataTypes.STRING,
    dealtime: DataTypes.STRING,
    nature: DataTypes.STRING,
    exprience: DataTypes.STRING,
    description: DataTypes.STRING,
    form: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Work',
  });
  return Work;
};