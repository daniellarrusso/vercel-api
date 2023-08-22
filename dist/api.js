"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const symbols_1 = __importDefault(require("./routes/symbols"));
const trades_1 = __importDefault(require("./routes/trades"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/symbols', symbols_1.default);
app.use('/trades', trades_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to dashboard API 👻');
});
const connectApi = () => app.listen(port, () => {
    console.log('API listening on port: ' + port);
});
exports.default = connectApi;
//# sourceMappingURL=api.js.map