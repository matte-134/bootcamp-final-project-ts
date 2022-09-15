"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Tables = _1.sequelize.define('Tables', {
    tableNumber: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.NUMBER,
        unique: true,
    },
    capacity: {
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER,
    },
    occupied: {
        defaultValue: false,
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    firstName: {
        defaultValue: '',
        type: sequelize_1.DataTypes.TEXT
    }
});
exports.default = Tables;
