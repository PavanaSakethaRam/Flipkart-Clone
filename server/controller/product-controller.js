import Product from '../models/productModel.js';

export const getProducts = async (req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const getProductById = async (req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}