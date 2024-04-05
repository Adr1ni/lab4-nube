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
exports.postClient = exports.getClient = void 0;
const client_service_1 = require("../services/client.service");
const error_handler_1 = require("../utils/error.handler");
const postClient = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body }, res) {
    try {
        const responseClient = yield (0, client_service_1.insertClient)(body);
        res.send(responseClient);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_POST_CLIENT');
    }
});
exports.postClient = postClient;
const getClient = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseClient = yield (0, client_service_1.getClients)();
        res.send(responseClient);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_CLIENTS');
    }
});
exports.getClient = getClient;
