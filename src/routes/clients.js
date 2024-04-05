"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', client_controller_1.getClient);
router.post('/', client_controller_1.postClient);
