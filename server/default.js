import { products } from "./constants/data.js";
import Product from "./models/productModel.js";

const DefaultData = async() => {
    try{
        await Product.insertMany(products);
        console.log("Default Data Imported Successfully");
    }catch(error){
        console.log("Error while inserting Default Data");
        if(error.message.includes("E11000 duplicate key error collection")){
            console.log("Default Data Already Inserted");
        }
        else
        console.log(error);
    }
};

export default DefaultData;