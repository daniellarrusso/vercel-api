"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    date: { type: Date, default: new Date() },
    side: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    cost: { type: Number },
    asset: { type: String, required: true },
    currency: { type: String, required: true },
    closeTime: { type: Date },
    advisorType: { type: String, required: true },
    orderId: { type: String },
    status: { type: String },
});
exports.TradeModel = (0, mongoose_1.model)('Trade', schema);
//# sourceMappingURL=trade.js.map