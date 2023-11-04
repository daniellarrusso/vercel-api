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
// mongoexport --uri mongodb+srv://admin:CoffeeFish@cluster0.xpu1y.mongodb.net/crypto-dashboard --collection trades --type js --out data.json
const data_json_1 = __importDefault(require("./data.json"));
const connection_1 = __importDefault(require("./db/connection"));
const trade_1 = require("./model/trade");
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, connection_1.default)();
        yield trade_1.TradeModel.deleteMany({});
        for (let trade of data_json_1.default) {
            const doc = yield new trade_1.TradeModel(Object.assign(Object.assign({}, trade), { advisorType: 'Manual', date: new Date() })).save();
            console.log(doc.asset + ' Inserted');
        }
    });
}
seed();
//# sourceMappingURL=seed.js.map