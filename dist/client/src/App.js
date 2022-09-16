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
function App() {
    const [customerList, setCustomerList] = (0, react_1.useState)([]);
    const [button, setButton] = (0, react_1.useState)(false);
    const showList = () => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('http://localhost:8000/display');
        const data = yield res.json();
        setCustomerList(data);
    });
    const showButton = () => {
        setButton(!button);
    };
    const addToTable = () => {
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(addToTable_1.AddToTable, {}) }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App" }, { children: (0, jsx_runtime_1.jsx)(form_1.Form, {}) })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "View Waiting List" }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => showList() }, { children: "Waiting List" }))] }), (0, jsx_runtime_1.jsx)("div", { children: customerList.map(customer => (0, jsx_runtime_1.jsxs)("div", Object.assign({ id: customer.firstName, onClick: () => showButton() }, { children: [customer.firstName, " ", customer.lastName, " ", button ? (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => (0, jsx_runtime_1.jsx)(addToTable_1.AddToTable, {}) }, { children: "Add to Table" })) : null, " "] }))) })] }));
}
exports.default = App;
