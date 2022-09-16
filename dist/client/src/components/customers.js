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
exports.Names = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Names = () => {
    const [allNames, setAllNames] = (0, react_1.useState)([]);
    function getNames() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch('http://localhost:8000/display');
            const data = yield res.json();
            setAllNames(data);
        });
    }
    (0, react_1.useEffect)(() => {
        getNames();
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { children: allNames }));
};
exports.Names = Names;
