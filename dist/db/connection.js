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
const mongoose_1 = require("mongoose");
class MongoDbConnection {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = 'mongodb+srv://admin:CoffeeFish@cluster0.xpu1y.mongodb.net/crypto-dashboard?retryWrites=true&w=majority';
            try {
                yield (0, mongoose_1.connect)(uri);
                console.log('Connected To Mongodb in the Cloud');
            }
            catch (error) {
                console.log('Error connecting', error);
            }
        });
    }
}
exports.default = new MongoDbConnection().connect;
//# sourceMappingURL=connection.js.map