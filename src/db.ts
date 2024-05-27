import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
});
export const testDB = new Sequelize({
    dialect: 'sqlite',
    storage: './database_test.sqlite',
    logging: false,
});
