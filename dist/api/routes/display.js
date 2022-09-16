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
exports.displayRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.displayRouter = express_1.default.Router();
const customer_1 = __importDefault(require("../../db/models/customer"));
exports.displayRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield customer_1.default.findAll();
    let allNames = data.map(getAllNames);
    function getAllNames(name) {
        return name.firstName + ' ' + name.lastName;
    }
    console.log(data);
    res.send(data);
}));
