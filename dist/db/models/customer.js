"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
// let id: number = Math.floor(Math.random() * 100000)
const Customer = _1.db.define('Customer', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4
    },
    firstName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    partyNumber: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Customer;
