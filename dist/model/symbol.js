"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolModel = void 0;
const mongoose_1 = require("mongoose");
exports.SymbolModel = (0, mongoose_1.model)('Symbol', new mongoose_1.Schema({
    symbol: { type: String, required: true },
}));
//# sourceMappingURL=symbol.js.map