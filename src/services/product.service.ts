import {Products} from "../interfaces/products.interface";
import ProductModel from "../models/product";


const insertProduct = async (product:Products) => {
    return await ProductModel.create(product);
};

const getProducts = async ()=>{
    return await ProductModel.find({});
};


export {insertProduct, getProducts};