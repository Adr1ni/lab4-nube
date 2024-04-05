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
exports.postProduct = exports.getProduct = void 0;
const error_handler_1 = require("../utils/error.handler");
const product_service_1 = require("../services/product.service");
const postProduct = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body }, res) {
    try {
        const responseProduct = yield (0, product_service_1.insertProduct)(body);
        res.send(responseProduct);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_POST_CLIENT');
    }
});
exports.postProduct = postProduct;
const getProduct = (_b, res_2) => __awaiter(void 0, [_b, res_2], void 0, function* ({ params }, res) {
    try {
        const responseProduct = yield (0, product_service_1.getProducts)();
        res.send(responseProduct);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_CLIENTS');
    }
});
exports.getProduct = getProduct;
