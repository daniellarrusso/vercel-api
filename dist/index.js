"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
const connection_1 = __importDefault(require("./db/connection"));
(0, connection_1.default)();
(0, api_1.default)();
//# sourceMappingURL=index.js.map