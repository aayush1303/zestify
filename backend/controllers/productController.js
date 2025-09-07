import productModel from "../models/productModel.js";

// Add product item (simplified without file upload)
const addProductItem = async (req, res) => {
    try {
      console.log("=== ADD PRODUCT DEBUG ===");
      console.log("Request body:", req.body);
      console.log("========================");
      
      // Validate required fields
      if (!req.body.name || !req.body.description || !req.body.category || !req.body.price || !req.body.image) {
        return res.json({ success: false, message: "All fields including image URL are required" });
      }

      // Save product item with image URL
      const product = new productModel({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: Number(req.body.price),
        image: req.body.image, // Direct image URL
      });
  
      await product.save();
      res.json({ 
        success: true, 
        message: "Product Item Added Successfully"
      });
    } catch (error) {
      console.log("Error in addProductItem:", error);
      res.json({ success: false, message: error.message });
    }
  };

  // List All Product Items with optional filters
  const listProduct = async (req, res) => {
    try {
      const { category, minPrice, maxPrice } = req.query;
      let filter = {};
      
      // Add category filter
      if (category && category !== 'all') {
        filter.category = category;
      }
      
      // Add price range filter
      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
      }
      
      const products = await productModel.find(filter);
      res.json({ success: true, data: products });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };
  
  // Remove Product Item
  const removeProductItem = async (req, res) => {
    try {
      console.log("Remove product request body:", req.body);
      
      // Check if id is provided
      if (!req.body.id) {
        return res.json({ success: false, message: "Product ID is required" });
      }

      const product = await productModel.findById(req.body.id);
      
      // Check if product exists
      if (!product) {
        return res.json({ success: false, message: "Product not found" });
      }

      await productModel.findByIdAndDelete(req.body.id);
      res.json({ success: true, message: "Product Item Deleted Successfully" });
    } catch (error) {
      console.log("Error in removeProductItem:", error);
      res.json({ success: false, message: error.message });
    }
  };

export { addProductItem, listProduct, removeProductItem };
