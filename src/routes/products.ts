import {Router} from "express";
import {getProduct, postProduct} from "../controllers/product.controller";
import {insertProduct} from "../services/product.service";


const router = Router();

router.get('/',getProduct);
router.post('/',postProduct);

export { router };