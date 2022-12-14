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
exports.AddToTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AddToTable = (customer) => {
    const [options, setOptions] = (0, react_1.useState)([]);
    const [tNumber, setTNumber] = (0, react_1.useState)('');
    const [custInfo, setCustInfo] = (0, react_1.useState)({});
    const [custAdded, setCustAdded] = (0, react_1.useState)('');
    console.log(customer);
    // useEffect(() => {
    //     setCustInfo(customer)}, [customer])
    // console.log(custInfo)
    const getUnoccupidTables = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch('http://localhost:8000/tables/unoccupied/find');
        const data = yield res.json();
        // console.log(data)
        setOptions(data);
    });
    (0, react_1.useEffect)(() => {
        getUnoccupidTables();
    }, []);
    (0, react_1.useEffect)(() => {
        setCustInfo(customer);
    }, [customer]);
    const handleSubmit = (ev, customer) => {
        ev.preventDefault();
        const postToTable = (tNumber, custInfo) => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield fetch(`http://localhost:8000/tables/${tNumber}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(custInfo)
            });
        });
        const updateWaitingStatus = (custInfo) => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield fetch('http://localhost:8000/customer/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(custInfo)
            });
        });
        postToTable(tNumber, custInfo);
        updateWaitingStatus(custInfo);
        setCustAdded('Customer has been added to Table ' + tNumber);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("form", Object.assign({ className: 'addButtonQ', onSubmit: e => handleSubmit(e, customer) }, { children: [(0, jsx_runtime_1.jsxs)("select", Object.assign({ className: 'addButtonQ', onChange: e => setTNumber(e.target.value) }, { children: [(0, jsx_runtime_1.jsx)("option", { children: "Select Table Number" }), (0, jsx_runtime_1.jsx)("optgroup", Object.assign({ label: 'Capacity: 2' }, { children: options.map(table => table.capacity === 2 ? (0, jsx_runtime_1.jsx)("option", Object.assign({ value: table.tableNumber }, { children: table.tableNumber })) : null) })), (0, jsx_runtime_1.jsx)("optgroup", Object.assign({ label: 'Capacity: 4' }, { children: options.map(table => table.capacity === 4 ? (0, jsx_runtime_1.jsx)("option", Object.assign({ value: table.tableNumber }, { children: table.tableNumber })) : null) })), (0, jsx_runtime_1.jsx)("optgroup", Object.assign({ label: 'Capacity: 6' }, { children: options.map(table => table.capacity === 6 ? (0, jsx_runtime_1.jsx)("option", Object.assign({ value: table.tableNumber }, { children: table.tableNumber })) : null) }))] })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'addButtonQ' }, { children: "Submit" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: custAdded === '' ? 'none' : 'addButtonR' }, { children: custAdded }))] }));
};
exports.AddToTable = AddToTable;
