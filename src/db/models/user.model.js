const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'users'; 

class User extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE, 
            modelName: 'User',
            timestamps: true
        }
    }
}

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombres: { 
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombres'
    },
    apellidos: { 
        allowNull: false,
        type: DataTypes.STRING,
        field: 'apellidos'
    },
    correo: { 
        allowNull: false,
        type: DataTypes.STRING,
        field: 'correo'
    },
}

module.exports = { User, UserSchema };