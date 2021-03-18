'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: "UserRoles"
      }),
        User.belongsToMany(models.Work, {
          through: "SaveWorks"
        }),
        User.belongsToMany(models.Company, {
          through: "Recruitments"
        })
      User.hasMany(models.NotificationUser),
        User.hasMany(models.New)
      User.hasOne(models.Candidate)
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    male: DataTypes.STRING,
    avatar: DataTypes.STRING,
    date: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};