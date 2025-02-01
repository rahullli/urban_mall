import express from 'express';
import userRoutes from './routes/user.js';
import categoryRoutes from './routes/category.js';
import productRoutes from './routes/product.js';
import orderRoutes from './routes/order.js';
import dotenv from 'dotenv';
import connectDB from './config/connect.js';
import { PORT } from './config/config.js';
dotenv.config();
const app = express();
app.use(express.json());

// Routes 
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRoutes);

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen({port: PORT,host:"0.0.0.0"}, (err,add)=>{
            if(err){    
                 console.log(err);
            }   
            else{
                console.log(`Server started on port 3000`);
            }
        })
    }
    catch(e){
        console.log(e);
    }
}
start();
