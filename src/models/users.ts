import { sequelize } from '../db';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: [5, 20],
        },
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isBefore: '2020-11-11',
        },
    },
    income: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            min: 0,
        },
    },
});
