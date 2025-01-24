import express from 'express';
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());

// Routes 
app.use("/user", userRoutes);

const start = async () =>{
    try{
        app.listen({port: 3000,host:"0.0.0.0"}, (err,add)=>{
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
