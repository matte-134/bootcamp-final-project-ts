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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./App.css");
const form_1 = require("./components/form");
const addToTable_1 = require("./components/addToTable");
const headers_1 = require("./components/headers");
function App() {
    const [customerList, setCustomerList] = (0, react_1.useState)([]);
    const [button, setButton] = (0, react_1.useState)(false);
    const [oneCust, setOneCust] = (0, react_1.useState)([]);
    const [showAdd, setShowAdd] = (0, react_1.useState)(false);
    const [customer, setCustomer] = (0, react_1.useState)({});
    const [tableList, setTableList] = (0, react_1.useState)([]);
    const [showWaitHead, setShowWaitHead] = (0, react_1.useState)(false);
    const [showTableHead, setShowTableHead] = (0, react_1.useState)(false);
    const [showCustInfoState, setShowCustInfoState] = (0, react_1.useState)([]);
    const [header, setHeader] = (0, react_1.useState)('Welcome');
    const [tNum, setTNum] = (0, react_1.useState)(0);
    const showList = () => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('http://localhost:8000/display');
        const data = yield res.json();
        setCustomerList(data);
        setOneCust([]);
        setTableList([]);
        setButton(false);
        setShowAdd(false);
        setShowWaitHead(true);
        setShowTableHead(false);
        setShowCustInfoState([]);
        setHeader('Waiting List');
    });
    const showTables = () => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('http://localhost:8000/tables');
        const data = yield res.json();
        setTableList(data);
        setCustomerList([]);
        setOneCust([]);
        setButton(false);
        setShowAdd(false);
        setShowWaitHead(false);
        setShowTableHead(true);
        setShowCustInfoState([]);
        setHeader('Tables List');
    });
    const showButton = (id) => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`http://localhost:8000/customer/${id}`);
        const data = yield res.json();
        // console.log(data[0].id)
        setOneCust(data);
        setButton(!button);
        setCustomerList([]);
        setCustomer(data[0]);
        // console.log(custInfo)
    });
    const showCustInfo = (tNumber) => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`http://localhost:8000/tables/${tNumber}`);
        try {
            const data = yield res.json();
            setShowCustInfoState(data);
            setTableList(tableList.slice(tNumber - 1, tNumber));
            setTNum(tNumber);
        }
        catch (error) {
            alert('This table is unoccupied');
        }
    });
    const removeFromTable = () => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`http://localhost:8000/tables/${tNum}/remove`, {
            method: 'PUT'
        });
        setShowCustInfoState([]);
        showTables();
    });
    const addToTable = () => {
        setShowAdd(!showAdd);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App" }, { children: (0, jsx_runtime_1.jsx)(form_1.Form, {}) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'title' }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: header }), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'addButtonT', onClick: () => showList() }, { children: "Waiting List" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'addButtonT', onClick: () => showTables() }, { children: "Tables" }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'customers' }, { children: [showWaitHead ? (0, jsx_runtime_1.jsx)(headers_1.WaitingHeader, {}) : null, showTableHead ? (0, jsx_runtime_1.jsx)(headers_1.TableHeader, {}) : null, tableList.map(tables => (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: tables.occupied ? "red" : "green", id: tables.tableNumber, onClick: () => showCustInfo(tables.tableNumber) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'columnT' }, { children: tables.tableNumber })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'columnT' }, { children: tables.capacity })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'columnT' }, { children: tables.occupied ? (0, jsx_runtime_1.jsx)("span", { children: "\u2713" }) : (0, jsx_runtime_1.jsx)("span", { children: "\u2718" }) }))] }))), showCustInfoState.map(customer => (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'custInfo' }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [customer.firstName, " ", customer.lastName] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Party size: ", customer.partyNumber] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Customer added to Table at: ", customer.updatedAt] }), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'addButton', onClick: () => removeFromTable() }, { children: "Remove from table" }))] }))), customerList.map(customer => (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: customer.id % 2 === 0 ? "even" : "odd", id: customer.firstName, onClick: () => showButton(customer.id) }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'columnW' }, { children: [customer.firstName, " ", customer.lastName] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'columnWP' }, { children: customer.partyNumber })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'columnWP' }, { children: customer.createdAt }))] }))), oneCust.map(customer => (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'rowW' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'columnW' }, { children: [customer.firstName, " ", customer.lastName] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'columnWP' }, { children: customer.partyNumber })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'columnWP' }, { children: customer.createdAt }))] })))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'buttonDiv' }, { children: button ? (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'addButton', onClick: () => addToTable() }, { children: "Add to Table" })) : null })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'buttonDiv' }, { children: showAdd ? (0, jsx_runtime_1.jsx)(addToTable_1.AddToTable, Object.assign({}, customer)) : null }))] }));
}
exports.default = App;
