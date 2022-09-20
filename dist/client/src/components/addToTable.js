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
const AddToTable = (custInfo) => {
    const [addToTable, setAddToTable] = (0, react_1.useState)(false);
    const [options, setOptions] = (0, react_1.useState)([]);
    const [tNumber, setTNumber] = (0, react_1.useState)('');
    const getUnoccupidTables = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch('http://localhost:8000/tables/unoccupied/find');
        const data = yield res.json();
        console.log(data);
        setOptions(data);
    });
    (0, react_1.useEffect)(() => {
        getUnoccupidTables();
    }, []);
    const handleSubmit = (ev, custInfo) => {
        ev.preventDefault();
        const postToTable = (tNumber, custInfo) => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield fetch(`http://localhost:8000/tables/${tNumber}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify({ custInfo })
            });
        });
        postToTable(tNumber, custInfo);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: e => handleSubmit(e, custInfo) }, { children: [(0, jsx_runtime_1.jsx)("select", Object.assign({ onChange: e => setTNumber(e.target.value) }, { children: options.map(table => (0, jsx_runtime_1.jsx)("option", Object.assign({ value: table.tableNumber }, { children: table.tableNumber }))) })), (0, jsx_runtime_1.jsx)("button", { children: "Submit" })] })) }));
};
exports.AddToTable = AddToTable;
