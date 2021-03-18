'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagNew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TagNew.init({
    newId: {
      type: DataTypes.INTEGER,
      references: {
        model: "New",
        key: "id"
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'TagNew',
  });
  return TagNew;
};