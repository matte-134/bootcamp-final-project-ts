"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeader = exports.WaitingHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./headers.css");
function WaitingHeader() {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'headRowW' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'headColumnW' }, { children: "Customer's Name" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'headColumnW' }, { children: "Party Size" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'headColumnW' }, { children: "Time Added" }))] })));
}
exports.WaitingHeader = WaitingHeader;
function TableHeader() {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'headRowT' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'headColumnT' }, { children: "Table Number" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'headColumnT' }, { children: "Capacity" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'headColumnT' }, { children: "Occupied?" }))] })));
}
exports.TableHeader = TableHeader;
