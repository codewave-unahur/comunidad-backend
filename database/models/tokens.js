'use strict';

const {
    Model
  } = require('sequelize');
  
module.exports = (sequelize, DataTypes) => {
    class tokens extends Model {
        static associate(models) {
            tokens.belongsTo(models.usuarios
                ,{
                    as: 'usuario',
                    foreignKey: 'userId'
                })
        }
    }
    tokens.init({
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          }
    },
    {
        sequelize,
        modelName:"tokens",
    });
      
  
    // Configura la expiración de los tokens (900 segundos)
    tokens.addHook('beforeCreate', (tokenInstance, options) => {
      tokenInstance.createdAt = new Date();
      tokenInstance.createdAt.setSeconds(tokenInstance.createdAt.getSeconds() + 900);
    });

    return tokens;
  };
  