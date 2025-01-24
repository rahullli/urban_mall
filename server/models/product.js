import mongoose, {Schema} from "mongoose";
const ProductSchema = new Schema({
    name : {type : String, required : true},
    image_url : {type: String , required : true},
    description : { type : String , required : true},
})