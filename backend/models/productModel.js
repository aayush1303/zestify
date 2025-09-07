import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;

//first schema for this one is created and then model is created and then exported
// 1