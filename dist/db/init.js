"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const seedData_1 = require("../seeders/seedData");
const tables_1 = __importDefault(require("./models/tables"));
const models_1 = require("./models");
const employee_1 = __importDefault(require("./models/employee"));
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    yield models_1.db.sync({ force: true });
    yield Promise.all(seedData_1.tables.map(table => tables_1.default.create(table)));
    yield Promise.all(seedData_1.employee.map(employee => employee_1.default.create(employee)));
    // await Waiting.create()
    console.log('Database populated');
});
exports.seed = seed;
