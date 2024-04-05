import {Client} from "../interfaces/clients.interface";
import ClientModel from "../models/client";


const insertClient = async (client:Client) => {
    return await ClientModel.create(client);
};

const getClients = async () => {
    return await ClientModel.find({});
};

export {insertClient, getClients};