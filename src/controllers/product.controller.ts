import { Request, Response } from "express";
import {handleHttp} from "../utils/error.handler";
import {getProducts, insertProduct} from "../services/product.service";

const postProduct = async ({body}: Request, res: Response)=> {
    try{
        const responseProduct = await insertProduct(body);
        res.send(responseProduct);
    }catch (e) {
        handleHttp(res, 'ERROR_POST_CLIENT');
    }
};

const getProduct = async ({params}:Request, res:Response) => {
    try {
        const responseProduct = await getProducts();
        res.send(responseProduct);
    }catch (e) {
        handleHttp(res, 'ERROR_GET_CLIENTS');
    }
};

export {getProduct,postProduct};