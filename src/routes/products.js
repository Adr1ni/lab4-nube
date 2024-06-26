"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', product_controller_1.getProduct);
router.post('/', product_controller_1.postProduct);
