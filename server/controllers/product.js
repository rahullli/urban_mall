import Product from "../models/product.js";

const getProductsByCategoryId = async (req,res) =>{
    try{
        const {categoryId} = req.params;
        const products = await Product.find({category : categoryId});
        if(!products || products.lenth == 0){
            return res.status(404).json({
                success: false,
                message: "No products found for this category",
            })
        }
        res.status(200).json({
            success: true,
            products
        });
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Failed to receive products",
            error : e.message});
    }
}

export {getProductsByCategoryId};