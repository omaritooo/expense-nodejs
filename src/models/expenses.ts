import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db';
import { Category } from './categories';
import { User } from './users';

export const Expenses = sequelize.define('Expense', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    type: {
        type: DataTypes.ENUM('installments', 'loan', 'single payment'),
        allowNull: false,
    },
    value: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    monthlyValue: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: {
            notNullIfInstallment(value: number) {
                if (this.type === 'installments' && (value === null || value === undefined)) {
                    throw new Error('Monthly value must be included.');
                }
            },
        },
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    timeLeft: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    moneyLeft: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
});

Expenses.hasOne(Category, {
    foreignKey: 'category_id',
});
Expenses.hasOne(User, {
    foreignKey: 'user_id',
});
Category.belongsTo(Expenses);
