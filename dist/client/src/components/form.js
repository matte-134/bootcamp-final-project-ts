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
exports.Form = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./form.css");
const Form = () => {
    const [firstName, setFirstName] = (0, react_1.useState)('');
    const [lastName, setLastName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [partyNumber, setPartyNumber] = (0, react_1.useState)(0);
    const handleSubmit = (ev) => {
        ev.preventDefault();
        const postCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield fetch('http://localhost:8000/customer', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'firstName': firstName, 'lastName': lastName, 'email': email, 'partyNumber': partyNumber })
            });
        });
        postCustomer();
        setFirstName('');
        setLastName('');
        setEmail('');
        setPartyNumber(0);
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'addCustomer' }, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Add Customer to Waiting List" }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { className: 'inputField', type: 'text', placeholder: 'First Name', value: firstName, onChange: e => setFirstName(e.target.value), required: true }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { className: 'inputField', type: 'text', placeholder: 'Last Name', value: lastName, onChange: e => setLastName(e.target.value), required: true }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { className: 'inputField', type: 'text', placeholder: 'Email', value: email, onChange: e => setEmail(e.target.value) }) }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'tableOptions' }, { children: (0, jsx_runtime_1.jsxs)("select", Object.assign({ onChange: e => setPartyNumber(parseInt(e.target.value)) }, { children: [(0, jsx_runtime_1.jsx)("option", { children: "Select Party Size" }), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: 1 }, { children: "1" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: 2 }, { children: "2" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: 3 }, { children: "3" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: 4 }, { children: "4" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: 5 }, { children: "5" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: 6 }, { children: "6" }))] })) })), (0, jsx_runtime_1.jsx)("button", { children: "Sumbit" })] })) })));
};
exports.Form = Form;
