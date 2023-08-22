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
const trade_1 = require("../model/trade");
const mongoose_1 = require("mongoose");
const route = (0, express_1.Router)();
route.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield trade_1.TradeModel.find().select('-transactions -__v');
        res.json(response).status(204);
    }
    catch (error) {
        console.log(error);
    }
}));
route.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const obj = Object.assign({}, req.query);
    try {
        const trades = yield trade_1.TradeModel.find(Object.assign({}, obj));
        res.status(200).json(trades);
    }
    catch (error) {
        console.log(error);
    }
}));
route.get('/:asset', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trades = yield trade_1.TradeModel.find({ asset: req.params.asset });
        res.status(200).json(trades);
    }
    catch (error) {
        console.log(error);
    }
}));
route.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doc = yield new trade_1.TradeModel(...req.body);
        yield doc.save();
        res.status(200).send(doc);
    }
    catch (error) {
        if (error instanceof mongoose_1.Error)
            res.status(400).send('Bad Request ' + error.message);
    }
}));
route.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log(id);
    try {
        yield trade_1.TradeModel.deleteOne({ _id: id });
        res.json(id);
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = route;
//# sourceMappingURL=trades.js.map