import express from 'express';
import { addProductItem, listProduct, removeProductItem } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/add", addProductItem);
productRouter.get("/list", listProduct);
productRouter.post("/remove", removeProductItem);

export default productRouter;
