"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const customer_1 = __importDefault(require("./customer"));
const Tables = _1.db.define('Tables', {
    tableNumber: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.NUMBER
    },
    capacity: {
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER,
    },
    occupied: {
        defaultValue: false,
        type: sequelize_1.DataTypes.BOOLEAN,
    }
});
customer_1.default.hasOne(Tables, { foreignKey: 'tables' });
Tables.belongsTo(customer_1.default);
exports.default = Tables;
