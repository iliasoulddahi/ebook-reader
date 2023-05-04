'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Ebook, {foreignKey: "OwnerId"})
    }
  }
  User.init({
    username: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"username is required"
        },
        notEmpty:{
          msg:"username is required"
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"email is required"
        },
        notEmpty:{
          msg:"email is required"
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"password is required"
        },
        notEmpty:{
          msg:"password is required"
        }
      }
    },
    role:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"role is required"
        },
        notEmpty:{
          msg: "role is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate(user){
        user.password = hash(password);
      }
    }
  });
  return User;
};