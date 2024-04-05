import {model, Schema} from "mongoose";
import {Client} from "../interfaces/clients.interface";


const ClientSchema = new Schema<Client> (
    {
        name: {
            type:String,
            required:true
        },
        lastName: {
            type:String,
            required:true
        },
        email: {
            type:String,
        },
        address: {
            type:String,
        },
        phone: {
            type:String,
        },
    }
)

const ClientModel = model('clients' ,ClientSchema);
export default ClientModel;