import Category from "../models/category.js";

const getAllCategories = async(req,res) =>{
    try{
       const categories = await Category.find();
       res.statu(200).json({
        success: true,
        categories
    })
    }
    catch(e){
        res.statu(500).json({
            success: false,
            message: "Failed to retrieve categories",
            error: e.message
        })
    }
}

export {getAllCategories};