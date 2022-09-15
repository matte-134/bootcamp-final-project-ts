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
exports.customerRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.customerRouter = express_1.default.Router();
const customer_1 = __importDefault(require("../../db/models/customer"));
// CREATE /customer
exports.customerRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield customer_1.default.create(req.body);
    console.log(req.body);
    res.send("Customer added");
}));
// GET /customer (by first name)
exports.customerRouter.get("/:firstName", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let findName = req.params.firstName.charAt(0).toUpperCase() + req.params.firstName.slice(1);
    let names = yield customer_1.default.findAll({
        where: {
            firstName: findName
        }
    });
    res.send(names);
}));
