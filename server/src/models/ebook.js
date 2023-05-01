'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ebook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ebook.belongsTo(models.User, { foreignKey: "OwnerId" })
    }
  }
  Ebook.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "name is required"
        },
        notEmpty: {
          msg: "name is required"
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "pdf url is required"
        },
        notEmpty: {
          msg: "pdf url is required"
        }
      }
    },
    OwnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Owner id is required"
        },
        notEmpty: {
          msg: "Owner id is required"
        }
      },
      references:{
        model:"Users",
        key:"id"
      }
    }
  }, {
    sequelize,
    modelName: 'Ebook',
  });
  return Ebook;
};