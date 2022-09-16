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
const Form = () => {
    const [firstName, setFirstName] = (0, react_1.useState)('');
    const [lastName, setLastName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const handleSubmit = (ev) => {
        ev.preventDefault();
        const postCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield fetch('http://localhost:8000/customer', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'firstName': firstName, 'lastName': lastName, 'email': email })
            });
        });
        postCustomer();
        setFirstName('');
        setLastName('');
        setEmail('');
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Add Customer to waiting List" }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: 'text', placeholder: 'First Name', value: firstName, onChange: e => setFirstName(e.target.value) }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: 'text', placeholder: 'Last Name', value: lastName, onChange: e => setLastName(e.target.value) }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: 'text', placeholder: 'Email', value: email, onChange: e => setEmail(e.target.value) }) }), (0, jsx_runtime_1.jsx)("button", { children: "Sumbit" })] })) }));
};
exports.Form = Form;