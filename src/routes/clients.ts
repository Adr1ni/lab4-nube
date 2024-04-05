import {Router} from "express";
import {getClient, postClient} from "../controllers/client.controller";


const router = Router();

router.get('/',getClient);
router.post('/',postClient);

export { router };