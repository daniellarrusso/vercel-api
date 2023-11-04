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
const express_1 = require("express");
const symbol_1 = require("../model/symbol");
const trade_1 = require("../model/trade");
const route = (0, express_1.Router)();
route.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield symbol_1.SymbolModel.find().select('-__v');
    const trades = yield trade_1.TradeModel.find();
    const output = result.map((m) => ({
        _id: m._id,
        symbol: m.symbol,
        quantity: trades
            .filter((t) => t.asset === m.symbol)
            .reduce((acc, cur) => acc + cur.quantity, 0),
        cost: trades
            .filter((t) => t.asset === m.symbol)
            .reduce((acc, cur) => acc + cur.cost, 0),
    }));
    res.json(output).status(200);
}));
route.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { symbol } = req.body;
    const doc = yield new symbol_1.SymbolModel({ symbol });
    doc.save();
    res.json({ _id: doc._id, symbol: doc.symbol }).status(200);
}));
exports.default = route;
//# sourceMappingURL=symbols.js.map