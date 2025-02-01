import mongoose, {mongo, Schema} from "mongoose";
const ProductSchema = new Schema({
    name : {type : String, required : true},
    image_url : {type: String , required : true},
    description:{type : String}, 
    price: {type : Number, required : true},
    ar_uri: {type : String},
    cateogary : [{ type : mongoose.Schema.Types.ObjectId, ref: "Category"}],
    description : { type : String , required : true},
    createdAt : {type : Date , default : Date.now},
    updatedAt : {type : Date , default : Date.now},
})

const Product = mongoose.model("Product", ProductSchema);
export default Product;