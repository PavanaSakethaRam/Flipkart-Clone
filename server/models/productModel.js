import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    detailUrl: { type: String, required: true },
    title: {
        type: Object,
        required: true,
        shortTitle: { type: String, required: true },
        longTitle: { type: String, required: true },
    },
    price: {
        type: Object,
        required: true,
        mrp: { type: Number, required: true },
        cost: { type: Number, required: true },
        discount: { type: String, required: true },
    },
    quantity: { type: Number, required: true },
    description: { type: String },
    discount: { type: String, required: true },
    tagline: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;