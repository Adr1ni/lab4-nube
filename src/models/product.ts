import {model, Schema} from "mongoose";
import {Products} from "../interfaces/products.interface";

const ProductSchema = new Schema<Products> (
    {
        name: {
          type:String,
          required:true
        },
        cost: {
            type:String,
            required:true
        },
        description: {
            type:String,
        },
        stockQuantity: {
            type:Number,
        },
    }
);

const ProductModel = model('products',  ProductSchema);
export default ProductModel;