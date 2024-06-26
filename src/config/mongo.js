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
require("dotenv/config");
const mongoose_1 = require("mongoose");
function dbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        const DB_URI = "mongodb://root:123456@localhost:27017/Test?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";
        yield (0, mongoose_1.connect)(DB_URI);
    });
}
exports.default = dbConnect();
