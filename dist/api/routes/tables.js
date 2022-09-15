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
exports.tablesRouter = void 0;
const express_1 = __importDefault(require("express"));
const customer_1 = __importDefault(require("../../db/models/customer"));
exports.tablesRouter = express_1.default.Router();
const tables_1 = __importDefault(require("../../db/models/tables"));
// ADD Customer to Table // /tables/:tablenumber
exports.tablesRouter.put('/:tableNumber', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let foundTable = yield tables_1.default.findOne({
        where: {
            tableNumber: req.params.tableNumber
        }
    });
    let foundCustomer = yield customer_1.default.findOne({
        where: {
            firstName: 'Lucy'
        }
    });
    yield foundTable.setCustomer(foundCustomer);
    yield foundTable.update({
        occupied: true
    });
    res.send("Customer added to table");
}));
// GET customer info from table
exports.tablesRouter.get('/:tableNumber', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let foundTable = yield tables_1.default.findOne({
        where: {
            tableNumber: req.params.tableNumber
        }
    });
    if (foundTable.occupied === true) {
        let customer = foundTable.CustomerId;
        let data = yield customer_1.default.findOne({
            where: {
                id: customer
            }
        });
        let customerName = data.firstName + ' ' + data.lastName;
        res.send(customerName);
    }
    else {
        res.send('Table unoccupied');
    }
}));
// REMOVE customer from table
exports.tablesRouter.put('/:tableNumber/remove', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let foundTable = yield tables_1.default.findOne({
        where: {
            tableNumber: req.params.tableNumber
        }
    });
    if (foundTable.occupied === true) {
        yield foundTable.setCustomer(null);
        yield foundTable.update({
            occupied: false
        });
        res.send("Customer removed from table");
    }
    else {
        res.send("Table unoccupied");
    }
}));
// GET tables that are unoccupied
exports.tablesRouter.get('/unoccupied/find', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let unoccupied = yield tables_1.default.findAll({
        where: {
            occupied: false
        }
    });
    let tables = unoccupied.map(getTableNumber);
    function getTableNumber(table) {
        return "Table " + table.tableNumber + ' has capcity of ' + table.capacity;
    }
    // let capacity: any = unoccupied.map(getTableCapacity)
    // function getTableCapacity (table: any): Array<number> {
    //     return table.capacity
    // }
    res.send(tables);
}));
// GET tables that are occupied
exports.tablesRouter.get('/occupied/find', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let occupied = yield tables_1.default.findAll({
        where: {
            occupied: true
        }
    });
    let tables = occupied.map(getTableNumber);
    function getTableNumber(table) {
        return table.tableNumber;
    }
    res.send(tables);
}));
