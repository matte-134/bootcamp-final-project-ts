"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Employee = _1.sequelize.define('Employee', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
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
    userID: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    }
});
exports.default = Employee;
