import { Request, Response } from "express";
import {getClients, insertClient} from "../services/client.service";
import {handleHttp} from "../utils/error.handler";

const postClient = async ({body}: Request, res:Response)=> {
    try{
        const responseClient = await insertClient(body);
        res.send(responseClient);
    }catch (e) {
        handleHttp(res, 'ERROR_POST_CLIENT');
    }
};

const getClient = async (_req:Request, res:Response) => {
    try {
        const responseClient = await getClients();
        res.send(responseClient);
    }catch (e) {
        handleHttp(res, 'ERROR_GET_CLIENTS');
    }
};

export {getClient,postClient};

